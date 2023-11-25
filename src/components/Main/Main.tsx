// import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { MainWrapper } from "./style";
import { Mail, Phone } from "@mui/icons-material/";

function Main() {
  // const [showText, setShowText] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowText((prev) => (prev < 7 ? prev + 1 : prev));
  //   }, 500); // 1초 간격으로 텍스트 표시

  //   return () => clearInterval(interval);
  // }, []);
  return (
    <MainWrapper>
      <div className="main-container">
        <div className="main-img">
          <img
            className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
            src="https://yangjihye.s3.ap-northeast-2.amazonaws.com/main.jpg"
            alt=""
          />
        </div>
        <div className="main-text">
          <Typography
            variant="h3"
            color="blue-gray"
            // style={{
            //   visibility: showText >= 1 ? "visible" : "hidden",
            //   animation: "fadeIn 1s",
            // }}
            className="mb-3"
          >
            안녕하세요.
          </Typography>

          <Typography
            variant="h3"
            color="blue-gray"
            // style={{
            //   visibility: showText >= 2 ? "visible" : "hidden",
            //   animation: "fadeIn 2s",
            // }}
            className="mb-3"
          >
            저는 경험을 통해 끊임없이 성장하는
          </Typography>

          <Typography
            variant="h1"
            color="blue-gray"
            // style={{
            //   visibility: showText >= 3 ? "visible" : "hidden",
            //   animation: "fadeIn 3s",
            // }}
            className="mb-3"
          >
            개발자 양지혜입니다.
          </Typography>

          <Typography
            variant="h4"
            color="blue-gray"
            // style={{
            //   visibility: showText >= 4 ? "visible" : "hidden",
            //   animation: "fadeIn 4s",
            // }}
            className="mb-3"
          >
            대화하면서 새로운 아이디어와 해결책을 얻는 것을 좋아하고,
          </Typography>

          <Typography
            variant="h4"
            color="blue-gray"
            // style={{
            //   visibility: showText >= 5 ? "visible" : "hidden",
            //   animation: "fadeIn 5s",
            // }}
            className="mb-9"
          >
            긍정에너지로 함께 성장하는 것을 소중히 생각합니다.
          </Typography>

          <div className="main-contact flex-col">
            <div
              className="flex items-center gap-3 mb-3"
              // style={{
              //   visibility: showText >= 6 ? "visible" : "hidden",
              //   animation: "fadeIn 6s",
              // }}
            >
              <Phone />
              <Typography variant="h4">010.7541.2881</Typography>
            </div>

            <div
              className="flex items-center gap-3"
              // style={{
              //   visibility: showText >= 7 ? "visible" : "hidden",
              //   animation: "fadeIn 7s",
              // }}
            >
              <Mail />
              <Typography variant="h4">dnql54@gmail.com</Typography>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
}

export default Main;
