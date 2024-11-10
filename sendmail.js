var nodemailer = require('nodemailer');
var sender = nodemailer.createTransport({
    service:'gmail',
    auth:{
        username:'gmail.com',
        password:'sbhei2hue'
    }
});

var composemail = {
    from:'j@gmail.com',
    to:'h@gmail.com',
    subject:'wnfkihk',
    html:'<p>hi</p>'
}

sender.sendMail(composemail,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('mail sent successfully'+info.reponse);
    }
})