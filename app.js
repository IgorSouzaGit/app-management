const { response } = require('express')
var express = require ('express')

var app = express

app.get('/', (req,res)=>{
    response.send('Hello World')
})

app.set('port', (process.env.PORT || 5000))

//Start do Servidor
app.listen(5000)
