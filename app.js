const express = require('express')
const app = express()
const getVersion = require('./public/getVersion')
app.use(express.static('assets'))
app.get('/', (req, res) => {
   if(req.query.name){
   getVersion(res,req.query.name)
   }else{
      res.send("specify package")
   }
})

app.listen(process.env.PORT || 4000)