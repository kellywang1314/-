const express = require('express')
const app = express()
const port = 3000
//静态文件，不要具体到文件
app.use(express.static(__dirname + '/src/jsonp'))
app.get('/jsonp',function(req,res){
    res.sendFile(__dirname+'/src/jsonp/jsonp.html')
})
app.listen(3000)