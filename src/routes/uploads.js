const formidable = require('formidable');
const express = require('express')
const multer = require('multer')
const fs = require('fs')
//const path = require('path')

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
    
    router.post('/upload', async (req, res, next) => {
        try {
            var form = new formidable.IncomingForm();
            form.parse(req, async function (err, fields, files) {
                var oldpath = files.filesup.path;
                var newpath = '/tmp/uploads/' + files.filesup.name;
                fs.rename(oldpath, newpath, function (err) {
                    if (err) throw err;
                });
                const result = await app.services.converter.convertFile(files.filesup.name)
                setTimeout(() => {
                    res.redirect(`/files/${files.filesup.name}.csv`)
                }, 4000)
            });
        } catch (error) {
            res.status(500).send(error)
        }
    })
    

    return router
}