
var express = require ('express')

var app = express()

app.get('/', function (req,res){
    console.log('Hello World')
    res.write("Testando")
    res.end()
})

//Start do Servidor
app.listen(process.env.PORT || 5000)
