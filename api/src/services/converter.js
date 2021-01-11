const fs = require('fs')
const path = require('path')

module.exports = app => {
    const convertFile = (file) => {
        const absolute = '/tmp/uploads'
        const paths = path.join(absolute, file)
        
        fs.readFile(paths , (err, rawdata) => {
    
        const data = JSON.parse(rawdata)
        const replacer = (key, value) => value === null ? '' : value
        const header = Object.keys(data[0])
        const csv = [
            header.join(';'),
            ...data.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(';'))
        ].join('\r\n')
  
        const absoluteConverted = '/home/godev/Documentos/projects/json-cvg/api/convertions'
        var response = path.join(absoluteConverted, `${file}.csv`)
        fs.writeFile(response, csv, (err) => {
            if(err) {
                throw err
            }
        })
    })
    
    return 'ok'
    }
    return { convertFile }
}
