const express = require('express')
const app = express()
const getVersion = require('./public/label')
app.get('/', (req, res) => {
   getVersion(res,req.query.name)
})

app.listen(3000)