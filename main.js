const fs = require('fs')

function convertFile(file){
  fs.readFile(file , (err, rawdata)=> {
  const data = JSON.parse(rawdata)

  const replacer = (key, value) => value === null ? '' : value
  const header = Object.keys(data[0])
  const csv = [
    header.join(';'),
    ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))
  ].join('\r\n')

  fs.writeFile(`${file}.csv`, csv, (err) => {
    if(err) {
        throw err
    }
  })

})
}

convertFile('Proffuzzi2020-10-11.json')