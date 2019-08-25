const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const email = require('../email');

let currentMail;

router.post('', (req, res, next) => {

    console.log(req.body);

    // let transporter = nodemailer.createTransport({
    //     service: "hotmail",
    //     auth: {
    //       user: email.user,
    //       pass: email.password
    //     }
    // });

    // let mailOptions = {
    //     from: '<chadwaltersdev@hotmail.com>', // sender address
    //     to: email.user, // list of receivers
    //     subject: "Portfolio Message", // Subject line
    //     text: `Sender: name: ${req.body.name}, email: ${req.body.email}, message: ${req.body.content}` // plain text body
    // };

    // //nodemailer logic goes here
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if(error){
    //         return console.log(error);
    //     }
    // })
    // .then(sentMail => {
    //     console.log(sentMail);
    //     currentMail = sentMail;
    //     res.status(201).json({
    //         message: "Mail sent succesfully."
    //     });
    // });
});

router.get('', function(req, res){
    res.send('works');
});

module.exports = router;
