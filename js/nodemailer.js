/**
 * @author Ken Klatt k@zva.us
 */

/* Require the module */
var nodemailer = require('nodemailer');

/* Create reusable transport object using SMTP */
var transporter = nodemailer.createTransport({
    service: 'klar.us',
    auth: {
        user: 'k@zva.us',
        pass: 'userpass'
    }
});

transporter.sendMail({
	from: 'sender@address',
	to: 'receiver@address',
	subject: 'subject',
	text: 'hello world!'
})
