var http = require('http');
var fs = require('fs');
http.createServer(function(re,res){
    fs.readFile('demo.txt',function(err,data){
        if(err){
            return console.log(err);
        }
        console.log("Async data:"+data.toString());
        res,write(data);
        res.end();
    });
}).listen(8080);