// import React, { useState, useEffect } from "react";
import { SkillsWrapper } from "./style";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";

function Skills() {
  const data = [
    {
      label: "React",
      value: "react",
      image: [
        "https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white",
      ], // React에 대한 이미지 URL
      details: [
        "1. UI : 컴포넌트 기반으로 UI를 구성하고, 각 컴포넌트를 재사용 및 독립적으로 관리할 수 있습니다.",
        "2. Event : 버튼클릭, 텍스트입력 등 사용자의 액션에 반응하여 특정로직을 수행할 수 있습니다.",
        "3. API : 백엔드 서버에 존재하는 엔드포인트에 접근, 필요로 하는 API를 호출할 수 있습니다.",
        "4. Hooks : useState를 사용하여 상태변수를 선언하고 업데이트할 수 있습니다.",
        "useEffect를 사용하여 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정할 수 있습니다.",
        "useDispatch를 사용하여 Redux store에 정의된 액션(action)을 디스패치할 수 있습니다.",
        "5. useRef를 사용하여 HTML 미디어 요소의 메서드를 직접 호출하고 미디어재생관리를 할 수 있습니다.",
      ],
    },
    {
      label: "React native",
      value: "react-native",
      image: [
        "https://img.shields.io/badge/React_Native-61DAFB?style=flat&logo=react&logoColor=white",
      ], // React에 대한 이미지 URL
      details: [
        "1. UI : React Native에 미리 정의된 Button, View, Text등을 화면구성에 조합하여 사용하고, 컴포넌트 기반의 UI를 만들 수 있습니다.",
        "2. StyleSheet : StyleSheet.create를 사용하여 스타일을 정의하고 적용할 수 있습니다.",
        "3. Navigation : React Navigation를 사용하여 스택 네비게이터를 구성하고 화면을 연결할 수 있습니다.",
        "4. API : 백엔드 서버에 존재하는 엔드포인트에 접근, 필요로 하는 API를 fetch 또는 axios를 사용하여 호출할 수 있습니다.",
        "5. Hooks : React의 useState, useEffect를 사용하여 애플리케이션의 상태를 관리할 수 있습니다.",
        "6. AsyncStorage : AsyncStorage를 사용하여 사용자의 토큰, 아이디 등을 키-값 쌍으로 저장하고 로그인 상태 등 데이터를 관리할 수 있습니다.",
        // 이하 세부 사항 추가...
      ],
    },

    {
      label: "TypeScript",
      value: "typeScript",
      image: [
        "https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white",
      ],
      details: [
        "타입스크립트에서 기본적인 타입 선언과 인터페이스를 활용하여 프로젝트의 타입 안정성을 보장할 수 있도록 공부하며 프로젝트를 수행했습니다.",
      ],
    },

    {
      label: "SpringBoot",
      value: "springboot",
      image: [
        "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white",
      ],
      details: [
        "RESTful API에 맞게 CRUD 콘트롤러를 작성하고 엔드포인트를 컨벤션에 맞게 작성할 수 있습니다.",
        "엔터티, 서비스, 레포지토리의 기본기능을 이해하고, 원하는 서비스로직을 구현할 수 있습니다.",
      ],
    },

    {
      label: "MariaDB",
      value: "mariadb",
      image: [
        "https://img.shields.io/badge/MariaDB-003545?style=flat&logo=mariadb&logoColor=white",
      ],
      details: [
        "DB 스키마 구조를 이해하고, HeidiSQL을 사용하여 테이블을 추가, 삭제, 수정할 수 있습니다.",
        "기본키,외래키 등을 설정하고 백엔드 엔터티에 알맞게 작성할 수 있습니다.",
      ],
    },
    {
      label: "Tools",
      value: "tools",
      image: ["",
        "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white",
        "https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white",
        "https://img.shields.io/badge/JIRA-0052CC?style=flat&logo=jira&logoColor=white",
      ],
      details: [
        "TailwindCss에서 제공하는 디자인을 적용하여 필요한 UI를 꾸밀 수 있고, Tailwind의 커스터마이징 기능을 이용할 수 있습니다.",
        "Git을 활용하여 commit, push, merge request등 기본적인 기능을 이용하여 프로젝트 협업을 하였고, 형상관리를 할 수 있습니다.",
        "JIRA를 활용하여 팀과 협업을 진행하였고, 에픽, 스토리, 태스크를 작성하고 관리하며 번다운보고서 등을 관리할 수 있습니다.",
      ],
    },
  ];
  return (
    <SkillsWrapper>
      <div className="skills-container mt-4">
        {/* <Typography variant="h3" className="mb-2">
          Frontend
        </Typography>
        <div className="front-skill mb-2">
          <img
            className="h-7"
            src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white"
            alt="React"
          />
          <Typography>
            1. UI : 컴포넌트 기반으로 UI를 구성하고, 각 컴포넌트를 재사용 및
            독립적으로 관리할 수 있습니다.
          </Typography>
          <Typography>
            2. Event : 버튼클릭, 텍스트입력 등 사용자의 액션에 반응하여
            특정로직을 수행할 수 있습니다.
          </Typography>
          <Typography>
            3. API : 백엔드 서버에 존재하는 엔드포인트에 접근, 필요로 하는 API를
            호출할 수 있습니다.
          </Typography>
          <Typography>
            4. Hooks : useState를 사용하여 상태변수를 선언하고 업데이트할 수
            있습니다.
          </Typography>
          <Typography>
            useEffect를 사용하여 컴포넌트가 렌더링될 때마다 특정 작업을
            수행하도록 설정할 수 있습니다.
          </Typography>
          <Typography>
            useDispatch를 사용하여 Redux store에 정의된 액션(action)을
            디스패치할 수 있습니다.{" "}
          </Typography>
          <Typography>
            5. useRef를 사용하여 HTML 미디어 요소의 메서드를 직접 호출하고
            미디어재생관리를 할 수 있습니다.{" "}
          </Typography>
          <img
            className="h-7"
            src="https://img.shields.io/badge/React_Native-61DAFB?style=flat&logo=react&logoColor=white"
            alt="React-native"
          />
          <Typography>
            1. UI : React Native에 미리 정의된 Button, View, Text등을 화면
            구성에 조합하여 사용하고, 컴포넌트 기반의 UI를 만들 수 있습니다.
          </Typography>
          <Typography>
            2. StyleSheet : StyleSheet.create를 사용하여 스타일을 정의하고
            적용할 수 있습니다.
          </Typography>
          <Typography>
            3. Navigation : React Navigation를 사용하여 스택 네비게이터를
            구성하고 화면을 연결할 수 있습니다.
          </Typography>
          <Typography>
            4. API : 백엔드 서버에 존재하는 엔드포인트에 접근, 필요로 하는 API를
            fetch 또는 axios를 사용하여 호출할 수 있습니다.
          </Typography>
          <Typography>
            5. Hooks : React의 useState, useEffect를 사용하여 애플리케이션의
            상태를 관리할 수 있습니다.
          </Typography>
          <Typography>
            6. AsyncStorage : AsyncStorage를 사용하여 사용자의 토큰, 아이디 등을
            키-값 쌍으로 저장하고 로그인 상태 등 데이터를 관리할 수 있습니다.
          </Typography>
          <img
            className="h-7"
            src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"
            alt="TypeScript"
          />
          <Typography>
            타입스크립트에서 기본적인 타입 선언과 인터페이스를 활용하여
            프로젝트의 타입 안정성을 보장할 수 있도록 공부하며 프로젝트를
            수행했습니다.{" "}
          </Typography>
          <img
            className="h-7"
            src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"
            alt="Tailwind_CSS"
          />
          <Typography>
            TailwindCss에서 제공하는 디자인을 적용하여 필요한 UI를 꾸밀 수 있고,
            Tailwind의 커스터마이징 기능을 이용할 수 있습니다.
          </Typography>
        </div>
        <Typography variant="h3" className="mb-2">
          Backend
        </Typography>
        <div className="back-skill mb-2">
          <img
            className="h-7"
            src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white"
            alt="Spring_Boot"
          />
          <Typography>Rest</Typography>
          <img
            className="h-7"
            src="https://img.shields.io/badge/MariaDB-003545?style=flat&logo=mariadb&logoColor=white"
            alt="MariaDB"
          />
        </div>
        <Typography variant="h3" className="mb-2">
          Tools
        </Typography>
        <div className="tools mb-2">
          <img
            className="h-7"
            src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white"
            alt="Git"
          />
          <img
            className="h-7"
            src="https://img.shields.io/badge/JIRA-0052CC?style=flat&logo=jira&logoColor=white"
            alt="JIRA"
          />
        </div> */}
        <Tabs id="custom-animation" value={data[0].value}>
          <TabsHeader>
            {data.map(({ label, value, image }) => (
                <Tab key={value} value={value}>
                  {" "}
                  {image[0] ? (
                    <img src={image[0]} alt={value} className="h-7 mb-2" />
                  ) : (
                    label
                  )}
                </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {data.map(({ value, image, details }) => (
              <TabPanel key={value} value={value}>
                {details.map((detail, index) => (
                  <div key={index} className="detail-with-image">
                    <img src={image[index+1]} alt="" className="h-7 mb-2" />
                    <Typography>{detail}</Typography>
                  </div>
                ))}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </SkillsWrapper>
  );
}

export default Skills;
