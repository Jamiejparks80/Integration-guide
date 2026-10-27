# Muuvo Partner API Guide

Integration guide for partners connecting to the Muuvo API: onboarding, tenancy timings, the British Gas void service, the full endpoint reference with code examples, and go-live.

Live guide: https://developerguide.muuvo.dev/

## Structure

| Path | What it is |
|---|---|
| `index.html` | The guide page (styles and behaviour are inline). |
| `api/model.js` | The endpoint model: paths, example bodies from the Swagger definitions, field notes and response codes. The page renders its endpoint reference from this file. |
| `scripts/build-specs.js` | Generates the downloadable OpenAPI spec and Postman collection from `api/model.js`. |
| `downloads/` | Generated files. Do not edit by hand. |

## Updating endpoints

1. Edit `api/model.js`.
2. Run `node scripts/build-specs.js` to regenerate `downloads/`.
3. Commit everything. GitHub Pages republishes the site within a couple of minutes.
