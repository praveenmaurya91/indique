
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firestore Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const nodemailer = require('nodemailer');
const gmailEmail = encodeURIComponent(functions.config().gmail.email);
const gmailPassword = encodeURIComponent(functions.config().gmail.password);
const mailTransport = nodemailer.createTransport(`smtps://${gmailEmail}:${gmailPassword}@smtp.gmail.com`);
/** 
 * function for sending the contact messages to the gmail account
*/
exports.sendMessage = functions.firestore
    .document('contact/{userId}')
    .onCreate(event => {
        // Get an object representing the document
        // e.g. {'name': 'Marie', 'age': 66}
        const value = event.data();

        // Template for sending the email.
        const mailOptions = {
            to: 'info@indique.com.au',
            subject: `Contact message from ${value.name}`,
            html: `<h1> Name: ${value.name}  </h1>
            <h3>Phone: ${value.phone}</h3>
            <h3>Email: ${value.email}</h3>
            <h3>Message:</h3>
            <p>${value.message}</p>`

        };
        return mailTransport.sendMail(mailOptions).then(() => {
            return console.log('Mail sent'); //The log will be shown in Firebase.
        });
    });
