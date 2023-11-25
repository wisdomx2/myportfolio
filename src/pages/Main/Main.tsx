import React from "react";
import NavBar from "../../components/common/NavBar/NavBar";
import Footer from "../../components/common/Footer/Footer";
import Main from "../../components/Main/Main";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Typography } from "@material-tailwind/react";

function MainPage() {
  return (
    <div>
      <NavBar />
      <Main />
      <Typography
              variant="h1"
              color="blue-gray"
              className="text-center"
            >
              프로젝트 소개
            </Typography>
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default MainPage;
