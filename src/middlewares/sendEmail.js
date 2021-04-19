const nodemailer = require('nodemailer');
const bodyForEmailNewExam = require('../views/emailBodyView/emailBodiNewExam');
const bodyForEmailNewUser = require('../views/emailBodyView/bodyForEmailNewUser');

async function sendMailNewUser(emails, params) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ezhi.elbrus@gmail.com', 
      pass: 'Qverty897142536',

    },
  });

  const info = await transporter.sendMail({
    from: 'ezhi.elbrus@yandex.ru',
    to: `${emails}`,
    subject: 'Добро пожаловать!',
    html: `${bodyForEmailNewUser(params)}`,
  });

  console.log('Message sent: %s', info.messageId);
}

async function sendMailNewExamen(emails, params) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'ezhi.elbrus@gmail.com',
      pass: 'Qverty897142536',

    },
  });

  const info = await transporter.sendMail({
    from: 'ezhi.elbrus@yandex.ru',
    to: `${emails}`,
    subject: 'Новая заявка на экзамен',
    html: `${bodyForEmailNewExam(params)}`,
  });

  console.log('Message sent: %s', info.messageId);
}

module.exports = { sendMailNewUser, sendMailNewExamen };
