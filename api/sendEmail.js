const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  const { name, subject, content } = req.body;

  // nodemailer 트랜스포터 설정
  let transporter = nodemailer.createTransport({
    service: 'naver',
    host: 'smtp.naver.com',  // SMTP 서버명
	port: 465,  // SMTP 포트
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // 이메일 메시지 설정
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `포트폴리오 사이트에서 메일을 보냈습니다. ${name}: ${subject}`, // 이메일 제목
    text: content // 이메일 내용
  };

  // 이메일 보내기
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: 'Email successfully sent!' });
  } catch (error) {
    res.status(500).send({ message: 'Error sending email', error });
  }
};
