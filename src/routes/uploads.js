const formidable = require('formidable');
const express = require('express')
const fs = require('fs')

module.exports = app => {
    const router = express.Router()
    
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