const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "4d79688cf16eac",
          pass: "7ac98b348aa423"
        }
      });
    const mensaje={
        from: "Recycle Bin Store <noreply@recyclebin.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;