module.exports = function (data) {
  if(typeof data !== "object") throw new Error('Params must be object')
  return {
    resourceType: 'Bundle',
    type: data.type,
	total: data.total,
	entry: data.entry
  }
}
