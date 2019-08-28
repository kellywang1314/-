const express = require('express')
const urllib = require('url');
const app = express()
const port = 8080
const data = {'data':'tony chung'};
app.get('/server',function(req,res){
    var params = urllib.parse(req.url,true);
    if(params.query.callback){
        //jsonp
        var str = params.query.callback + '(' + JSON.stringify(data) + ')';
        res.end(str);
    } else {
        res.end();
    }
})
app.listen(8080)