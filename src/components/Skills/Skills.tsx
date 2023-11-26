// import React, { useState, useEffect } from "react";
import { Typography } from "@material-tailwind/react";
import { SkillsWrapper } from "./style";

function Skills() {
  return (
    <SkillsWrapper>
      <div className="skills-container mt-4">
        <Typography>Frontend</Typography>
        <div className="front-skill gap-1 mb-2">
        <img className="h-7" src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white" alt="React"/>
        <img className="h-7" src="https://img.shields.io/badge/React_Native-61DAFB?style=flat&logo=react&logoColor=white" alt="React-native"/>
        <img className="h-7" src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white" alt="TypeScript"/>
        <img className="h-7" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white" alt="Tailwind_CSS"/>
        </div>
        <Typography>Backend</Typography>
        <div className="back-skill gap-1 mb-2">
        <img className="h-7" src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white" alt="Spring_Boot"/>
        <img className="h-7" src="https://img.shields.io/badge/MariaDB-003545?style=flat&logo=mariadb&logoColor=white" alt="MariaDB"/>
        </div>
        <Typography>Tools</Typography>
        <div className="tools gap-1 mb-2">
        <img className="h-7" src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git"/>
        <img className="h-7" src="https://img.shields.io/badge/JIRA-0052CC?style=flat&logo=jira&logoColor=white" alt="JIRA"/>
        </div>

      </div>
    </SkillsWrapper>
  );
}

export default Skills;
