import React from "react";
import mainImg from "../../assets/images/main.jpg";
import { Typography } from "@material-tailwind/react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { MainWrapper } from "./style";

function Main() {
  return (
    <MainWrapper>
      <div className="main-container">
        <div className="main-img">
		  <img
      className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
      src={mainImg}
      alt=""
    />
        </div>
		<div className="main-text">
		<Typography variant="h1" color="blue-gray">안녕하세요.</Typography>
		</div>
      </div>
      <div>
        <ProjectCard />
      </div>
    </MainWrapper>
  );
}

export default Main;
