
var express = require ('express')

var app = express()

app.get('/', function (req,res){
    console.log('Hello World')
    res.write("Testando")
    res.end()
})

app.set('port', (process.env.PORT || 5000))

//Start do Servidor
app.listen(5000)
