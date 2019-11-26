const fs = require('fs')
const _ = require('lodash')
const ejs = require('ejs')

const parseCsv = (fileName) => {
  const lines = fs.readFileSync(fileName,'utf8').split('\n')

  const fields = lines[0].split(',')
  const linesWithoutHeader = _.drop(lines)

  const colours = _.reduce(linesWithoutHeader,(acc,line)=>{
    acc.push(_.fromPairs(_.zip(fields,line.split(','))))
    return acc
  },[])
  
  return colours
}

const colours = parseCsv('./data/Colours.csv')
const template =  fs.readFileSync('./src/model/Colours.ts.template','utf8')
const source = ejs.render(template,{colours})
fs.writeFileSync(`./src/data/Colours.ts`,source)


console.log(source)