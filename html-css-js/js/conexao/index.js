const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const router = express.Router();
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/valores.html'))}
)
app.use('/',router)
app.listen(port||3000)
// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});