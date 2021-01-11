const path = require('path')
const express = require('express')
const consign = require('consign')
const app = express()

app.use(express.static(path.join(__dirname,'views')))
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/files', express.static('/home/godev/Documentos/projects/json-cvg/convertions'));

app.get('/', (req, res) => {
    res.render('index.ejs')
})

consign({cwd: 'src'})
    .include('./config/middlewares.js')
    .then('./services')
    .then('./routes')
    .then('./config/router.js')
    .into(app)

module.exports = app
