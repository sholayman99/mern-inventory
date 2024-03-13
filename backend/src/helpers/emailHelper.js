const nodemailer = require('nodemailer');

const sendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {

    const transport = nodemailer.createTransport({
        host: "mail.teamrabbil.com",
        port: 587,
        secure: false,
        auth: {user: "info@teamrabbil.com", pass: '~sR4[bhaC[Qs'},
        tls: {rejectUnauthorized: false},
    });

    const options={
        from:"Task Manager <info@teamrabbil.com>",
        to:EmailTo,
        subject:EmailSubject,
        text:EmailText
    };

    await transport.sendMail(options);

}
module.exports = sendEmailUtility ;