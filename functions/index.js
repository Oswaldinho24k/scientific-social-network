const functions = require('firebase-functions');
var nodemailer = require("nodemailer");
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

var Mailer = require("./mailer");

// exports.sendTemplateMail = functions.https.onRequest((req, res)=>{
//     var email = req.query.email;
//     Mailer(email);
//     res.send("enviado");
// });


exports.sendFollowMail = functions.database.ref("/dev/mail/{pushId}")
    .onWrite(event=>{
        const seguidor = event.params.pushId;
        Mailer("contacto@fixter.org");
        event.data.ref.remove();
        admin.database().ref("/dev/users/" + seguidor).on("value", snap=>{
            Mailer(snap.val().email);
            //ref.update(null);
        });
    });
