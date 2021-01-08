const express = require('express')

module.exports = app => {
    //const router = express.Router()
    
    app.use('/test', app.routes.uploads)

}
