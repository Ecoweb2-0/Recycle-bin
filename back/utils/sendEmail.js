const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ba5393ee79bbce",
          pass: "7549c7f0d38850"
        }
      });
    const mensaje={
        from: "Ecoweb Store <noreply@ecowebstory.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;