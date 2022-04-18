const nodemailer = require('nodemailer')

export default function handler(req, res) {
  if(req.method == 'POST'){
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: 'mail.websitewaala@gmail.com',
        pass: 'NODEMAILERhelper',
      },
      secure: true,
    })

    const mailData = {
      from: 'mail.websitewaala@gmail.com',
      to: 'singh.mriganshu@gmail.com',
      subject: `WebsiteWaala - Enquiry From ${req.body.fullName} - ${req.body.phone}`,
      text: req.body.message + " | Sent from: " + req.body.email,
      html: `<div>${req.body.message}</div><p>Sent from:
      ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        res.status(500).json(err);
      else
        res.status(200).json(info);
    })
  }
}
