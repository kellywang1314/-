const express = require('express')
const bodyParser = require('body-parser')   
const app = express()

app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.get('/index.html',(req,res) => {
    res.sendFile(__dirname + '/client/' + 'index.html')
})
app.post('/upload',(req,res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    console.log(req.body)
    res.send('server sucess')
})
app.listen(8080,() => {
    console.log('服务器启动成功')
})

