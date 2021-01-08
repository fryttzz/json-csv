const { urlencoded } = require('body-parser')
const bodyParser = require('body-parser')
const cors = require('cors')


module.exports = app => {
    app.use(bodyParser.json())
    app.use(urlencoded({extended: true}))
    app.use(cors())
    
}