module.exports = function (data) {
  if(typeof data !== "object") throw new Error('Params must be object')
  return {
    
    resourceType: 'observation',
    id: data.resourceId,
   code:{
		coding:[
					{
					"system:"http://loinc.org",
					"code: data.loincCode
					"display: data.displayText
 					}
				]
		},
    
    subject:{
        "reference:"patient/" + data.subjectId
    },
    encounter:{
        "reference:"Encounter/" + data.encounterId
    },
    effectiveDateTime: data.dateTime,
    valueQuantity:{
        value: data.vqValue,
        unit: data.vqUnit,
        system:"http://unitsofmeasure.org",
        code: data.vqCode
    }
  }