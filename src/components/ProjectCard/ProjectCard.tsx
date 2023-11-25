import React from "react";
import projects from "../../dummys/projects";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

import { ProjectCardWrapper } from "./style";

function ProjectCard() {
  return (
    <ProjectCardWrapper>
      {projects.map((project) => (
        <div key={project.id} className="project-item">
          <Card className="mt-6 w-96">
            <CardHeader className="relative">
              <img
                src={project.imageUrl}
                alt={project.name}
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {project.name}
              </Typography>
              <Typography>
                {project.description}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>자세히 보기</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </ProjectCardWrapper>
  );
}

export default ProjectCard;
