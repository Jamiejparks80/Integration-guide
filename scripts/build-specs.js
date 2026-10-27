#!/usr/bin/env node
/*
 * Generates the downloadable OpenAPI 3.0 spec and Postman collection from
 * api/model.js, so they always match the guide.
 *
 *   node scripts/build-specs.js
 */
const fs = require('fs');
const path = require('path');
const API = require('../api/model.js');

const OUT = path.join(__dirname, '..', 'downloads');
const INT_KEYS = /(^id$|Id$)/;

function schemaFor(value, key) {
  if (Array.isArray(value)) return { type: 'array', items: schemaFor(value[0], key) };
  if (value && typeof value === 'object') {
    const properties = {};
    Object.keys(value).forEach((k) => { properties[k] = schemaFor(value[k], k); });
    return { type: 'object', properties };
  }
  const s = typeof value === 'string' ? { type: 'string' }
    : typeof value === 'boolean' ? { type: 'boolean' }
    : INT_KEYS.test(key || '') ? { type: 'integer', format: 'int64' } : { type: 'number' };
  if (key && API.enums[key]) s.enum = API.enums[key];
  if (key && API.notes[key]) s.description = API.notes[key];
  return s;
}

function ref(name) { return { $ref: '#/components/schemas/' + name }; }
function responseSchema(res) { return Array.isArray(res) ? { type: 'array', items: ref(res[0]) } : ref(res); }
function opId(e) {
  const words = e.d.replace(/[^A-Za-z ]/g, '').split(' ');
  return words[0].toLowerCase() + words.slice(1).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('');
}

function buildOpenApi() {
  const paths = {};
  API.groups.forEach((g) => {
    g.endpoints.forEach((e) => {
      const op = { tags: [g.name], summary: e.d, description: e.n, operationId: opId(e), responses: {} };
      const params = (e.p.match(/\{(\w+)\}/g) || []).map((p) => p.slice(1, -1));
      if (params.length) op.parameters = params.map((name) => ({ name, in: 'path', required: true, schema: { type: 'integer', format: 'int64' } }));
      if (e.req) op.requestBody = { required: true, content: { 'application/json': { schema: ref(e.req) } } };
      Object.keys(e.codes).forEach((code) => {
        const r = { description: e.codes[code] };
        if (code === '200' && e.res) r.content = { 'application/json': { schema: responseSchema(e.res) } };
        op.responses[code] = r;
      });
      paths[e.p] = paths[e.p] || {};
      paths[e.p][e.m.toLowerCase()] = op;
    });
  });
  const schemas = {};
  Object.keys(API.schemas).forEach((name) => { schemas[name] = schemaFor(API.schemas[name]); });
  return {
    openapi: '3.0.3',
    info: {
      title: 'Muuvo Partner API',
      version: API.version,
      description: 'Partner API for sending tenancies, tenant leads and home buyers to Muuvo. Full guide: https://developerguide.muuvo.dev/'
    },
    servers: [
      { url: API.servers.staging, description: 'Staging' },
      { url: API.servers.production, description: 'Production' }
    ],
    security: [{ muuvoKey: [] }],
    tags: API.groups.map((g) => ({ name: g.name })),
    paths,
    components: {
      securitySchemes: { muuvoKey: { type: 'apiKey', in: 'header', name: API.authHeader } },
      schemas
    }
  };
}

function buildPostman() {
  const item = API.groups.map((g) => ({
    name: g.name,
    item: g.endpoints.map((e) => {
      const segs = e.p.replace(/^\//, '').split('/').map((s) => s.replace(/^\{(\w+)\}$/, ':$1'));
      const variable = (e.p.match(/\{(\w+)\}/g) || []).map((p) => ({ key: p.slice(1, -1), value: '0' }));
      const request = {
        method: e.m,
        header: e.req ? [{ key: 'Content-Type', value: 'application/json' }] : [],
        url: { raw: '{{baseUrl}}/' + segs.join('/'), host: ['{{baseUrl}}'], path: segs, variable },
        description: e.n
      };
      if (e.req) {
        const body = Array.isArray(e.req) ? [API.schemas[e.req[0]]] : API.schemas[e.req];
        request.body = { mode: 'raw', raw: JSON.stringify(body, null, 2), options: { raw: { language: 'json' } } };
      }
      return { name: e.d, request };
    })
  }));
  return {
    info: {
      name: 'Muuvo Partner API',
      description: 'Every partner endpoint, ready to try against staging. Set the apiKey variable to your staging key. Guide: https://developerguide.muuvo.dev/',
      schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json'
    },
    auth: { type: 'apikey', apikey: [{ key: 'key', value: API.authHeader, type: 'string' }, { key: 'value', value: '{{apiKey}}', type: 'string' }, { key: 'in', value: 'header', type: 'string' }] },
    variable: [
      { key: 'baseUrl', value: API.servers.staging },
      { key: 'apiKey', value: '' }
    ],
    item
  };
}

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'muuvo-partner-api.openapi.json'), JSON.stringify(buildOpenApi(), null, 2) + '\n');
fs.writeFileSync(path.join(OUT, 'muuvo-partner-api.postman_collection.json'), JSON.stringify(buildPostman(), null, 2) + '\n');
console.log('Wrote downloads/muuvo-partner-api.openapi.json and downloads/muuvo-partner-api.postman_collection.json');
