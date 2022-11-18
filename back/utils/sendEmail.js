const nodemailer= require("nodemailer")

const sendEmail = async options =>{
    const transport = nodemailer.createTransport({
        host: "smtp.office365.com",
        port: 587,
        auth: {
          user: "recyclebinciclo4@outlook.com",
          pass: "mozncjddjqqgxdnl"
        }
      });
    const mensaje={
        from: "Recycle Bin Junk Yard <recyclebinciclo4@outlook.com>",
        to: options.email,
        subject: options.subject,
        text: options.mensaje
    }

    await transport.sendMail(mensaje)
}

module.exports= sendEmail;