import React, { useState } from "react";
import { Typography, Textarea, Input, Button } from "@material-tailwind/react";
import { HelloWrapper } from "./style";

interface FormData {
  name: string;
  subject: string;
  content: string;
}

function Hello() {
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
        alert("Email sent successfully!");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };
  return (
    <HelloWrapper>
      <Typography variant="h3" color="black">
        방문해주셔서 감사합니다.
      </Typography>
      <Typography variant="h3" color="black">
        궁금하신 사항은 아래로 보내주세요.
      </Typography>
      <form onSubmit={handleSubmit}>
        <Input
          label="보내는 사람"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          crossOrigin=""
        />
        <Input
          type="text"
          name="subject"
          label="제목"
          value={formData.subject}
          onChange={handleChange}
          crossOrigin=""
        />
        <Textarea
          label="내용"
          name="content"
          value={formData.content}
          onChange={handleChange}
        />
        <Button size="sm" className="rounded-md" type="submit">메일보내기</Button>
      </form>
    </HelloWrapper>
  );
}

export default Hello;
