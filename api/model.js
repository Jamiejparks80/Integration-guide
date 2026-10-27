/*
 * Muuvo Partner API model.
 *
 * Single source of truth for the endpoint reference on the guide page and for
 * the generated OpenAPI file and Postman collection (scripts/build-specs.js).
 * Example bodies are exactly as generated from the Swagger definitions.
 */
(function (root) {
  var address = { addressLine1: 'string', addressLine2: 'string', addressLine3: 'string', townOrCity: 'string', county: 'string', postcode: 'string' };
  var bills = { councilTax: true, gas: true, electric: true, water: true };
  var addTenant = { title: 'string', firstName: 'string', lastName: 'string', contactNumber: 'string', email: 'string', dateOfBirth: 'string' };
  var leadGas = { gasSupplier: 'string', meterSerialNumber: 'string', MPRN: 0, hasGasSmartMeter: true, hasGasPrePayment: true };
  var leadElectric = { electricSupplier: 'string', meterSerialNumber: 'string', MPAN: 'string', hasSmartMeter: true, isPrePay: true };

  var schemas = {
    APIResponse: { resultCode: 'string', resultId: 0, Errors: ['string'] },
    Address: address,
    AddLandlord: { title: 'string', firstName: 'string', lastName: 'string', companyName: 'string', contactNumber: 'string', email: 'string', address: address },
    Landlord: { id: 0, title: 'string', firstName: 'string', lastName: 'string', companyName: 'string', contactNumber: 'string', email: 'string', address: address },
    AddProperty: { landlordId: 0, address: address },
    Property: { id: 0, landlordId: 0, address: address, UPRN: 'string', council: 'string', waterSupplier: 'string', councilTaxBand: 'string', councilAnnualCost: 'string', councilMonthlyCost: 'string', gas: { isGasAvailable: true, hasGasSmartMeter: true, hasGasPrePayment: true, meterSerialNumber: 'string', MPRN: 0, supplier: 'string' }, electric: { hasPrePayment: true, hasSmartMeter: true, isEconomy7: true, meterSerialNumber: 'string', MPAN: 0, supplier: 'string' } },
    PreTenancy: { tenancyStart: 'string', tenancyEnd: 'string', propertyId: 0, sendCouncilAndUtilityNotifications: true, whoIsResponsibleForTheVoidPeriod: 'string', voidBillCorrespondenceAddress: 'string', isFurnished: true, areAnyBillsIncludedInTheRent: bills, 'tenantServiceOptIn-Media': true, 'tenantServiceOptIn-Energy': true, voidService: true, gasMeterReading: 'string', gasMeterReadingDate: 'string', electricMeterReading: 'string', electricMeterReading_2: 'string', electricMeterReadingDate: 'string', waterMeterReading: 'string', waterMeterReadingDate: 'string' },
    Tenancy: { id: 0, tenancyStart: 'string', tenancyEnd: 'string', numberOfTenants: 0, isFurnished: true, isStudentLet: true, sendCouncilAndUtilityNotifications: true, whoIsResponsibleForTheVoidPeriod: 'string', voidBillCorrespondenceAddress: 'string', areAnyBillsIncludedInTheRent: bills, address: address },
    TenancyCompleteInfo: { id: 0, tenancyStart: 'string', tenancyEnd: 'string', numberOfTenants: 0, isFurnished: true, isStudentLet: true, sendCouncilAndUtilityNotifications: true, whoIsResponsibleForTheVoidPeriod: 'string', voidBillCorrespondenceAddress: 'string', areAnyBillsIncludedInTheRent: bills, address: address, electricity: { isPrePay: true, hasSmartMeter: true, serialNumber: 'string', MPAN: 'string', isEconomy7: true, supplier: 'string', startElectricityReading: { meterReading1: 'string', meterReading2: 0, meterReadingDate: 'string' }, endElectricityReading: { meterReading1: 'string', meterReading2: 'string' } }, gas: { isPrePay: true, hasSmartMeter: true, serialNumber: 'string', MPRN: 'string', supplier: 'string', startGasReading: { meterReading: 'string', meterReadingDate: 'string' }, endGasReading: { meterReading: 'string' } }, water: { serialNumber: 'string', startWaterReading: { reading: 'string', meterReadingDate: 'string' }, endWaterReading: { meterReading: 'string', meterReadingDate: 'string' } }, tenants: [Object.assign({ id: 0 }, addTenant)] },
    TenancyStart: { startElectricityReading: { meterReading1: 'string', meterReading2: 'string', meterReadingDate: 'string' }, startGasReading: { meterReading: 'string', meterReadingDate: 'string' }, startWaterReading: { meterReading: 'string', meterReadingDate: 'string' } },
    TenancyEnd: { tenancyEnd: 'string', propertyId: 0, sendCouncilAndUtilityNotifications: true, whoIsResponsibleForTheVoidPeriod: 'string', voidBillCorrespondenceAddress: 'string', isFurnished: true, areAnyBillsIncludedInTheRent: bills, 'tenantServiceOptIn-Media': true, 'tenantServiceOptIn-Energy': true, voidService: true, stillManageTheProperty: true, endElectricityReading: { meterReading1: 'string', meterReading2: 'string', meterReadingDate: 'string' }, endGasReading: { meterReading: 'string', meterReadingDate: 'string' }, endWaterReading: { meterReading: 'string', meterReadingDate: 'string' }, forwardingAddress: address },
    ForwardingAddress: { forwardingAddress: address },
    AddTenant: addTenant,
    Tenant: Object.assign({ id: 0 }, addTenant),
    AddTenantLead: { title: 'string', firstName: 'string', lastName: 'string', contactNumber: 'string', email: 'string', address: address, dateOfBirth: 'string', moveInDate: 'string', mediaOptIn: true, energyOptIn: true },
    TenantLead: { id: 0, title: 'string', firstName: 'string', lastName: 'string', contactNumber: 'string', email: 'string', address: address, council: 'string', waterSupplier: 'string', hasGas: true, gas: leadGas, electric: leadElectric, dateofBirth: 'string', moveInDate: 'string', mediaOptIn: true, energyOptIn: true },
    AddHomeBuyer: { title: 'string', firstName: 'string', lastName: 'string', contactNumber: 'string', email: 'string', address: address, dateOfBirth: 'string', expectedCompletionDate: 'string', mediaOptIn: true, energyOptIn: true },
    HomeBuyer: { id: 0, title: 'string', firstName: 'string', lastName: 'string', contactNumber: 'string', email: 'string', address: address, council: 'string', waterSupplier: 'string', hasGas: true, gas: leadGas, electric: leadElectric, dateofBirth: 'string', expectedCompletionDate: 'string', mediaOptIn: true, energyOptIn: true }
  };

  var DATE = 'Send as DD-MM-YYYY. Returned as YYYY-MM-DD.';
  var notes = {
    landlordId: 'The landlord ID returned by POST /landlords.',
    propertyId: 'The property ID returned by POST /properties.',
    tenancyStart: DATE, tenancyEnd: DATE, dateOfBirth: DATE, dateofBirth: 'Returned with a lower-case b. Send it as dateOfBirth.',
    moveInDate: DATE, expectedCompletionDate: DATE, meterReadingDate: DATE,
    gasMeterReadingDate: DATE, electricMeterReadingDate: DATE, waterMeterReadingDate: DATE,
    sendCouncilAndUtilityNotifications: 'true: Muuvo notifies the council and suppliers. false: the tenancy is treated as a tenant lead only.',
    whoIsResponsibleForTheVoidPeriod: 'Landlord or Property Agent.',
    voidBillCorrespondenceAddress: 'Landlord Address or Property Agent Address.',
    areAnyBillsIncludedInTheRent: 'Per utility. true means the bill is included in the rent, so Muuvo does not notify that council or supplier.',
    voidService: 'Opts the tenancy into the British Gas void service. Recommended: true.',
    meterReading2: 'Economy 7 meters only.', electricMeterReading_2: 'Economy 7 meters only.',
    MPAN: 'Store as text so leading zeros are kept.', MPRN: 'Store as text so leading zeros are kept.',
    forwardingAddress: "The outgoing tenants' forwarding address, sent at move-out.",
    isStudentLet: 'Tells the council it is a student property.',
    mediaOptIn: 'The lead has opted in to media offers.', energyOptIn: 'The lead has opted in to energy offers.',
    resultId: 'The ID of the record created or updated.', Errors: 'Problems with the request, if any.'
  };

  var enums = {
    whoIsResponsibleForTheVoidPeriod: ['Landlord', 'Property Agent'],
    voidBillCorrespondenceAddress: ['Landlord Address', 'Property Agent Address']
  };

  var OK = { 200: 'Successful operation' };
  function codes(extra) { return Object.assign({}, OK, extra); }
  var BAD = { 400: 'Invalid inputs' };

  var groups = [
    { name: 'Landlords', endpoints: [
      { m: 'GET', p: '/landlords', d: 'List all landlords', n: 'Returns every landlord on your account.', res: ['Landlord'], codes: codes({}) },
      { m: 'POST', p: '/landlords', d: 'Create a landlord', n: 'Create the landlord first. Keep the returned resultId as the landlordId for the property.', req: 'AddLandlord', res: 'APIResponse', codes: codes(BAD) },
      { m: 'GET', p: '/landlords/{landlordId}', d: 'Get a landlord', n: 'Returns one landlord.', res: 'Landlord', codes: codes({ 404: 'Landlord not found' }) },
      { m: 'PUT', p: '/landlords/{landlordId}', d: 'Update a landlord', n: 'Send the full landlord record with the corrections.', req: 'AddLandlord', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid landlord ID' }) }
    ] },
    { name: 'Properties', endpoints: [
      { m: 'GET', p: '/properties', d: 'List all properties', n: 'Returns every property on your account, with utility and council data.', res: ['Property'], codes: codes({}) },
      { m: 'POST', p: '/properties', d: 'Create a property', n: 'Muuvo starts matching the council, suppliers and meters as soon as the property is created.', req: 'AddProperty', res: 'APIResponse', codes: codes(BAD) },
      { m: 'GET', p: '/properties/{propertyId}', d: 'Get utility and council data', n: 'Usually populated straight away. If the address needs manual meter matching, allow up to two hours.', res: 'Property', codes: codes({ 404: 'Property not found' }) },
      { m: 'PUT', p: '/properties/{propertyId}', d: 'Update a property', n: 'Use this to correct the address or landlord rather than creating a new property.', req: 'AddProperty', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid property ID' }) }
    ] },
    { name: 'Tenancies', endpoints: [
      { m: 'GET', p: '/tenancies', d: 'List all tenancies', n: 'Returns a summary of every tenancy on your account.', res: ['Tenancy'], codes: codes({}) },
      { m: 'POST', p: '/tenancies', d: 'Create a pre-tenancy', n: 'Send as soon as references are passed. Use the pre-tenancy builder on this page to generate this body.', req: 'PreTenancy', res: 'APIResponse', codes: codes(BAD) },
      { m: 'GET', p: '/tenancies/{tenancyId}', d: 'Get the full tenancy', n: 'Returns the tenancy, meters with readings, and tenants.', res: 'TenancyCompleteInfo', codes: codes({ 404: 'Tenancy not found' }) },
      { m: 'PUT', p: '/tenancies/{tenancyId}', d: 'Update a tenancy', n: 'Use the stored tenancy ID for any change. Posting again would create a duplicate.', req: 'PreTenancy', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid tenancy ID' }) },
      { m: 'DELETE', p: '/tenancies/{tenancyId}', d: 'Delete a tenancy', n: 'Removes the tenancy. Landlords and properties cannot be deleted through the API.', codes: { 400: 'Invalid ID supplied', 404: 'Tenancy not found' } },
      { m: 'POST', p: '/tenancies/{tenancyId}/start', d: 'Send move-in readings', n: 'Once the check-in inventory is done. Aim for within five days of move-in: the later the readings, the more likely billing issues become.', req: 'TenancyStart', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid tenancy ID' }) },
      { m: 'POST', p: '/tenancies/{tenancyId}/end', d: 'Give notice, then closing readings', n: 'Call it twice. First as soon as notice is given, when the readings and forwarding address can be left empty. Then again on move-out with the closing readings and the forwarding address.', req: 'TenancyEnd', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid tenancy ID' }) },
      { m: 'POST', p: '/updateForwardingAddress/{tenancyId}', d: 'Update the forwarding address', n: 'Use this if the forwarding address changes after the end of tenancy has been sent.', req: 'ForwardingAddress', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid tenancy ID' }) }
    ] },
    { name: 'Tenants', endpoints: [
      { m: 'GET', p: '/tenancies/{tenancyId}/tenants', d: 'List tenants on a tenancy', n: 'Returns every tenant on the tenancy.', res: ['Tenant'], codes: codes({}) },
      { m: 'POST', p: '/tenancies/{tenancyId}/tenants', d: 'Add a tenant', n: 'Call once for each tenant on the tenancy.', req: 'AddTenant', res: 'APIResponse', codes: codes(BAD) },
      { m: 'GET', p: '/tenancies/{tenancyId}/tenants/{tenantId}', d: 'Get a tenant', n: 'Returns one tenant.', res: 'Tenant', codes: codes({ 404: 'Tenant not found' }) },
      { m: 'POST', p: '/tenancies/{tenancyId}/tenants/{tenantId}', d: 'Update a tenant', n: 'Note this update uses POST, not PUT.', req: 'AddTenant', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid ID' }) },
      { m: 'DELETE', p: '/tenancies/{tenancyId}/tenants/{tenantId}', d: 'Delete a tenant', n: 'Removes the tenant from the tenancy.', codes: { 400: 'Invalid ID supplied', 404: 'Tenant not found' } }
    ] },
    { name: 'Tenant leads', endpoints: [
      { m: 'GET', p: '/tenantLeads', d: 'List all tenant leads', n: 'Returns every tenant lead on your account.', res: ['TenantLead'], codes: codes({}) },
      { m: 'POST', p: '/tenantLeads', d: 'Create a tenant lead', n: 'A tenant to offer Muuvo services to, without any council or utility notifications.', req: 'AddTenantLead', res: 'APIResponse', codes: codes(BAD) },
      { m: 'GET', p: '/tenantLeads/{id}', d: 'Get a tenant lead', n: 'Returns one tenant lead, including utility data for the address.', res: 'TenantLead', codes: codes({ 404: 'Tenant lead not found' }) },
      { m: 'PUT', p: '/tenantLeads/{id}', d: 'Update a tenant lead', n: 'Send the full lead with the corrections.', req: 'AddTenantLead', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid ID' }) },
      { m: 'DELETE', p: '/tenantLeads/{id}', d: 'Delete a tenant lead', n: 'Removes the tenant lead.', codes: { 400: 'Invalid ID supplied', 404: 'Tenant lead not found' } }
    ] },
    { name: 'Home buyers', endpoints: [
      { m: 'GET', p: '/homeBuyers', d: 'List all home buyers', n: 'Returns every home buyer lead on your account.', res: ['HomeBuyer'], codes: codes({}) },
      { m: 'POST', p: '/homeBuyers', d: 'Create a home buyer', n: 'A buyer from your sales side to offer Muuvo services to before they move in.', req: 'AddHomeBuyer', res: 'APIResponse', codes: codes(BAD) },
      { m: 'GET', p: '/homeBuyers/{id}', d: 'Get a home buyer', n: 'Returns one home buyer, including utility data for the address.', res: 'HomeBuyer', codes: codes({ 404: 'Home buyer not found' }) },
      { m: 'PUT', p: '/homeBuyers/{id}', d: 'Update a home buyer', n: 'Send the full home buyer with the corrections.', req: 'AddHomeBuyer', res: 'APIResponse', codes: codes({ 400: 'Invalid inputs', 404: 'Invalid ID' }) },
      { m: 'DELETE', p: '/homeBuyers/{id}', d: 'Delete a home buyer', n: 'Removes the home buyer.', codes: { 400: 'Invalid ID supplied', 404: 'Home buyer not found' } }
    ] }
  ];

  // Variable name for each path parameter in code samples ({id} depends on the resource).
  var idNames = { 'Tenant leads': 'tenantLeadId', 'Home buyers': 'homeBuyerId' };

  var model = {
    version: '1.0',
    servers: { staging: 'https://agent.muuvostaging.com/services', production: 'https://agent.muuvo.co.uk/services' },
    authHeader: 'X-Muuvo-Key',
    schemas: schemas, notes: notes, enums: enums, groups: groups, idNames: idNames
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = model;
  else root.MUUVO_API = model;
})(this);
