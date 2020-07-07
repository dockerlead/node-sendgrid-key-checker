const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: process.env.EMAIL_ADDR_TO,
  from: process.env.EMAIL_ADDR_FROM,
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail.send(msg)
.then(res => console.log(res))
.catch(err => console.error(err))
