import React from "react";
import { Typography } from "@material-tailwind/react";
import { ProjectDetailWrapper } from "./style";

function ProjectDetail() {
  return (
    <ProjectDetailWrapper>
      <div className="main-container">

		<div className="main-text">
		<Typography variant="h1" color="white">디테일</Typography>
		</div>
      </div>
      <div>
      </div>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetail;
