var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/plain'});
    res.write("welcome to hellow world");
    res.end("thank you");
}).listen(8080);