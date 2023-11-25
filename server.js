const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001; // 포트 3000은 React 앱을 위해 사용 중일 수 있으므로 다른 포트 사용

// CORS 미들웨어 사용
app.use(cors());

app.use(bodyParser.json());

// nodemailer 트랜스포터 설정
const transporter = nodemailer.createTransport({
  service: 'naver', 
  host: 'smtp.naver.com',
  port: 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// 이메일 전송 API 라우트
app.post('/api/sendEmail', async (req, res) => {
  const { name, subject, content } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `포트폴리오 사이트에서 메일을 보냈습니다. ${name}: ${subject}`,
    text: content
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email successfully sent!' });
  } catch (error) {
    res.status(500).send({ message: 'Error sending email', error });
  }
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
