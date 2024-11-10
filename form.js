var http = require('http');
var fs = require('fs');
var formidable = require('formidable');

http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<form action="biodata" method="post" enctype="multipart/form-data">');
        res.write('<h1>BIODATA FORM</h1>');
        res.write('Name <input type="text" name="username><br>');
        res.write('D.O.B <input type="date" name="dob><br>');
        res.write('Qualification <input type="text" name="qualification><br>');
        res.write('Email id <input type="email" name="email><br>');
        res.write('Phone num <input type="text" name="number><br>');
        res.write('upload your resume <input type="file" name="uploadfile"><br>');
        res.write('<input type="submit">');
        res.end();
    }
    else if(req.url == '/biodata'){
        var form = formidable.incomingForm();
        form.parse(req,function(err,fields,files){
            res.write('<h1>name : '+fields.username+ '</h1><br>');
            res.write('<h1>D.O.B : '+fields.dob+ '</h1><br>');
            res.write('<h1>Qualification : '+fields.qualification+ '</h1><br>');
            res.write('<h1>Email : '+fields.email+ '</h1><br>');
            res.write('<h1>Phone num : '+fields.number+ '</h1><br>');
            
            var oldpath = files.uploadfile.path;
            var newpath = 'C:/Users/Kowsalya/Desktop/' +files.uploadfile.name;
            fs.rename(oldpath,newpath,function(err){
                if(err) throw err;
                res.write('<h1>Your file location</h1><br>');
                res.write('<h1>old path:'+oldpath+'</h1><br>');
                res.write('<h1>new path:'+newpath+'</h1><br>');
                res.end("<h1>Thanks for the response</h1>");

            }) 
        });
    }
    else{
        res.end('<h1>404 page not found</h1>');
    }
}).listen(8080);