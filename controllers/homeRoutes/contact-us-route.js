const router = require('express').Router();
const nodemailer = require('nodemailer');

// current connected to free email testing application since didn't want to route to my personal email.
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'team.wag.2022@gmail.com',
    pass: 'P@ssword1!',
  },
});

// email sending route.
router.post('/send', (req, res) => {
  console.log(req.body);

  const mailData = {
    from: 'team.wag.2022@gmail.com',
    to: 'danny.ramirezgd@gmail.com',
    subject: req.body.subject + ' ' + 'from' + ' ' + req.body.name,
    text: req.body.message + 'POC email@' + ' ' + req.body.email,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      return console.log(err);
    }
    res.status(200).send({ message: 'Mail sent', info });
  });
});

module.exports = router;
