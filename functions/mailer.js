var nodemailer = require("nodemailer");

//experimento con template
var handlebars = require('handlebars');
var fs = require('fs');

var readHTMLFile = function(path, callback) {
    fs.readFile(path, {encoding: 'utf-8'}, function (err, html) {
        if (err) {
            throw err;
            callback(err);
        }
        else {
            callback(null, html);
        }
    });
};


var Mailer = function(email){

    var transporter = nodemailer.createTransport({
        //service:"Gmail",
        host: 'smtp.gmail.com',
        port: 587,
        //secure: true,
        auth: {
            user:"fixtergeek@gmail.com",
            pass:"Poweroso1704"
        }
    });

    readHTMLFile(__dirname + '/email.html', function(err, html) {
        var template = handlebars.compile(html);
        var replacements = {
            username: "Héctor BlisS"
        };
        var htmlToSend = template(replacements);

        var mailOptions = {
            from: "fixtergeek@gmail.com",
            //to:email,
            bcc:email,
            subject: "¡Template desde Firebase!",
            html:htmlToSend
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
                callback(error);
            }
        });
    });

    //var text = "Bienvenido"

}

module.exports = Mailer;