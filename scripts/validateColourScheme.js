const fs = require('fs')
const _ = require('lodash')
const Ajv = require('ajv');
const ajv = new Ajv({allErrors: true}); 


const validateFile = (file, schemaFile) => {
  const rawSchema = fs.readFileSync(schemaFile,'utf8')
  const schema = JSON.parse(rawSchema)
  const validate = ajv.compile(schema);
  console.log(_.keys(schema))

  const rawData = fs.readFileSync(file,'utf8')
  const data = JSON.parse(rawData)
  console.log(_.keys(data))

  var valid = validate(data);
  if (!valid) console.log(validate.errors);
  return valid
}


const file = './data/skeleton.json'
//const file = './data/x.json'
const schemaFile = './schemas/colourSchemeSchema.json'
//const schemaFile = './schemas/x.json'

const status = validateFile(file,schemaFile)?"Valid":"Not Valid"
console.log(`${file} is ${status}`,)