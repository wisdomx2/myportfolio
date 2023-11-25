import React from "react";
import projects from "../../dummys/projects";
import { NavLink } from "react-router-dom";

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
          <Card className="mt-6 w-80">
              <div className="card-header">
            <CardHeader floated={false}>
                <img src={project.imageUrl} alt={project.name} className="p-2 w-64" />
            </CardHeader>
              </div>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {project.name}
              </Typography>
              <Typography>{project.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <NavLink to={`/projectdetail/${project.id}`}>
                <Button size="lg" fullWidth={true}>
                  자세히 보기
                </Button>
              </NavLink>
            </CardFooter>
          </Card>
        </div>
      ))}
    </ProjectCardWrapper>
  );
}

export default ProjectCard;
