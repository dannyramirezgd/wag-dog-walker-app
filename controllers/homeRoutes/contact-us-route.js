const router = require('express').Router();
const nodemailer = require('nodemailer');

// current connected to free email testing application since didn't want to route to my personal email.
let transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '0d03363be202b6',
    pass: 'da8c2776d42fab',
  },
});

// email sending route.
router.post('/send', (req, res) => {
  const { senderName, senderEmail, subject, message } = req.body;

  const mailData = {
    from: senderEmail,
    to: 'team.wag.2022@gmail.com',
    subject: subject + ' ' + 'from' + ' ' + senderName,
    text: message,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send({ message: 'Mail sent', info });
  });
});

module.exports = router;
