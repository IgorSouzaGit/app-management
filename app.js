const { response } = require('express')
var express = require ('express')

var app = express

app.get('/', (req,res)=>{
    response.send('Hello World')
})


