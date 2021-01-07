const fs = require('fs')

fs.readFile('test.json' , (err, rawdata)=> {
const data = JSON.parse(rawdata)

const replacer = (key, value) => value === null ? '' : value
const header = Object.keys(data[0])
const csv = [
  header.join(','),
  ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
].join('\r\n')

fs.writeFile('test.csv', csv, (err) => {
    if(err) {
        throw err
    }
})

})