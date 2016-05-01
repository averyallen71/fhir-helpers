module.exports = function (data) {
  if(typeof data !== "object") throw new Error('Params must be object')
  return {
    
    resourceType: 'admissionweight',
    id: data.personID,
   code:{
		coding:[
					{
					system:"http://loinc.org",
					code: data.loincCode,
					display: data.displayText
 					}
				]
		},
    
    valueQuantity:{
        value: data.admissionweight,
        unit: data.admissionweight,
        system:"http://unitsofmeasure.org",
        code: data.vqCode
    }
  }
}