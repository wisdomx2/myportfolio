import React from "react";
import NavBar from "../../components/common/NavBar/NavBar";
import Footer from "../../components/common/Footer/Footer";
import Main from "../../components/Main/Main";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Typography } from "@material-tailwind/react";
import { MainWrapper } from "./style";

function MainPage() {
  return (
    <MainWrapper>
      <div className="mb-1">
      <NavBar />
      </div>
      <Main />
      <Typography variant="h1" color="blue-gray" className="text-center">
        프로젝트 소개
      </Typography>
      <div className="mb-5">
        <ProjectCard />
      </div>
      <Footer />
    </MainWrapper>
  );
}

export default MainPage;
