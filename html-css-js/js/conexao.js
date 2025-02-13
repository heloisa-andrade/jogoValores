 const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const router = express.Router();
app.get('/', (req, res) => 
    res.sendFile(path.join(__dirname+'/valores.html'))
)
app.use('/',)
app.listen(port||3000)
