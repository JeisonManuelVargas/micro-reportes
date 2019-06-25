'use strict'
const express = require('express')
const asyncify = require('express-asyncify')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const http = require('http')
const cors = require('cors')
const url = require('./urls/index') 

const port = 4012 
const app = asyncify(express())
const server = http.createServer(app)

app.use(cors())
app.use(bodyParser.urlencoded({extended: true, limit: '20000mb'}))
app.use(bodyParser.json({extended: true, limit: '20000mb'}))

app.get('/', (req, res)=>{
    //res.send('Hello World');
    res.sendfile('index.html');
});
 
app.use('/v1', url) 

server.listen(port, ()=>{
    console.log(`${chalk.blue('InteredesReporte')} server listening on port ${port}`)
})

module.exports = server