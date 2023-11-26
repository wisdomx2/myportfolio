import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { ProjectDetailWrapper } from "./style";
import projects from "../../dummys/projects";
import NavBar from "../../components/common/NavBar/NavBar";
import Footer from "../../components/common/Footer/Footer";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((pj) => pj.id === Number(projectId));
  if (!project) {
    return <p>해당하는 프로젝트 정보가 없습니다.</p>;
  }

  return (
    <ProjectDetailWrapper>
      <NavBar />
      <div className="detail-container">
        <div className="detail-main-img m-3 gap-8">
          <img
            src={project.detailimg1}
            alt={project.name}
            className="h-96 w-1/2 rounded-lg object-center shadow-lg shadow-blue-gray-900/50"
          />
          <div className="detail-main-text">
            <Typography variant="h5">📌 프로젝트 제목 : {project.name}</Typography>
            <Typography variant="h5">📌 프로젝트 기간 : {project.period}</Typography>
            {project.awards ? (
              <Typography variant="h5">🏆 수상내역: {project.awards}</Typography>
            ) : (
              ""
            )}
            <Typography>개요 : {project.description}</Typography>
            <Typography>사용기술</Typography>
            {project.skills.split("\n").map((line) => (
              <Typography key={line}>{line}</Typography>
            ))}
          </div>
        </div>
        <div className="main-text m-6">
          <div className="role mb-3">
          <Typography variant="h5">✨ 역할 및 담당</Typography>
          {project.role.split("\n").map((line) => (
            <Typography key={line}>{line}</Typography>
          ))}
          </div>
          {/* <Typography>기여도 : {project.contribution}</Typography> */}
          <div className="feeling mb-3">
          <Typography variant="h5">느낀점 : {project.feeling}</Typography>
          </div>
          <div className="description2">
          <Typography variant="h5">상세기능 소개</Typography>
          {project.description2.split("\n").map((line) => (
            <Typography key={line}>{line}</Typography>
          ))}
          </div>
        </div>
      </div>
      <div></div>
      <Footer />
    </ProjectDetailWrapper>
  );
}

export default ProjectDetail;
