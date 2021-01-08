const express = require('express')
const multer = require('multer')
const path = require('path')

module.exports = app => {
    const router = express.Router()

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/")
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
    const upload = multer({
        storage: storage
        }).any('files')
    
    router.post('/upload',upload, async (req, res, next) => {
        try {
            const result = await app.services.converter.convertFile(req.files)
            res.status(200).send(`Arquivo convertido com sucesso: ${result}`)
            
        } catch (error) {
            res.status(500).send(error)
        }
    })

    return router
}