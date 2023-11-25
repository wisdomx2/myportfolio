import React, { useState } from "react";
import { Typography, Textarea, Input, Button } from "@material-tailwind/react";
import { HelloWrapper } from "./style";

interface FormData {
  name: string;
  subject: string;
  content: string;
}

function Hello() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    subject: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 모든 필드가 채워져 있는지 검사
    if (!formData.name || !formData.subject || !formData.content) {
      alert("빈칸을 모두 채워주세요.");
      return;
    }

    try {
      const response = await fetch("/api/sendEmail", {
        //   const response = await fetch("http://localhost:3001/api/sendEmail", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.message) {
        alert("이메일이 성공적으로 발송되었습니다!");
      }
      setIsSending(true);
      setTimeout(() => setIsSending(false), 30000); // 30초 동안 발송 금지
    } catch (error) {
      console.error("Error sending email:", error);
      alert("이메일 발송에 실패했습니다. 다시시도해주세요.");
    }
  };
  return (
    <HelloWrapper>
      <div className="background-section"/>
      <div className="form-section">
        <Typography variant="h3" color="black" className="mb-3">
          방문해주셔서 감사합니다.
        </Typography>
        <Typography variant="h3" color="black" className="mb-3">
          궁금하신 사항은 아래로 보내주세요.
        </Typography>
        <Typography className="mb-8">
          ※ 메일보내기는 발송완료 30초 후에 다시 활성화됩니다.
        </Typography>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <Input
              label="보내시는 분 성함"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              crossOrigin=""
              style={{ width: "100%", marginBottom: "20px" }}
            />
          </div>
          <div className="mb-4">
            <Input
              type="text"
              name="subject"
              label="제목"
              value={formData.subject}
              onChange={handleChange}
              crossOrigin=""
              style={{ width: "100%", marginBottom: "20px" }}
            />
          </div>
          <div className="mb-4">
            <Textarea
              label="내용"
              name="content"
              value={formData.content}
              onChange={handleChange}
            />
          </div>
          <div className="text-end">
            <Button
              size="md"
              className="rounded-md"
              type="submit"
              disabled={isSending}
            >
              메일보내기
            </Button>
          </div>
        </form>
      </div>
    </HelloWrapper>
  );
}

export default Hello;
