const nodemailer = require('nodemailer');


const sendMail = async (emailData: any) => {
    try {
        const { email, subject, data } = emailData;
        const transporter = nodemailer.createTransport({
            host: "smtp.forwardemail.net",
            port: 465,
            secure: true,
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: 'jadon.effertz62@ethereal.email',
                pass: 'FAEXkkEFVBXaHe9k6H'
            }
        });

        const message = {
            from: '"My Healthcare App" <aims.healthcare@gmail.com>', // sender address
            to: `${email}`, // list of receivers
            subject: `${subject}`, // Subject line
            text: `${data}`, // plain text body
            html: `<h2>${data}</h2>`, // html body
        }
        const info = await transporter.sendMail(message);
        console.log('message Sent' + info.messageId)
    }
    catch (error) {
        console.log(error);
    }

}

export const emailService = {
    sendMail
}