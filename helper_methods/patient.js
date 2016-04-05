module.exports = function (data) {
  if(typeof data !== "object") throw new Error('Params must be object')
  return {
    
    resourceType: 'patient',
    id: data.resourceId,
    identifier: [{
	  system: 'SSN',
	  value: data.ssn.trim()
    }],
    name: {
	  family: [data.familyName],
	  given: [data.givenName]
    },
    gender: data.gender.trim(),
    birthDate: data.birthDate,
    telecom: {}
    
  }
}
