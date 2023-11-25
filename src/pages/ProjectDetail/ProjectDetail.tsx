import React from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import { ProjectDetailWrapper } from "./style";
import projects from "../../dummys/projects";

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((pj) => pj.id === Number(projectId));
  if (!project) {
		return <p>해당하는 프로젝트 정보가 없습니다.</p>;
	}

  return (
    <ProjectDetailWrapper>
      <div className="main-container">
        <div>
          <img src={project.imageUrl} alt={project.name} />
        </div>
        <p className="text-xl">{project.name}</p>
        <div className="main-text">
          <Typography variant="h1" color="blue-gray">
            디테일
          </Typography>
        </div>
      </div>
      <div></div>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetail;
