import { Project } from "../types/project";

const projects: Project[] = [
  {
    id: 1,
    name: "나랑노랑",
    description:
      "아이와 어른이 '날 따라해봐요' 게임으로 함께하는 WebRTC 놀이방 프로젝트!",
    imageUrl: "https://narangnorangg.s3.ap-northeast-2.amazonaws.com/logo.png",
    period: "2023.07.03. ~ 2023.08.18. (7주, 6인 팀프로젝트)",
    role: "Team-Leader, Frontend \n '날 따라해봐요' 게임로직 설계 및 구현",
    skills:
      "Frontend:  javaScript, React, reduxjs/toolkit \n Backend: Java, Spring Boot, JPA, Spring Security, JWT \n Database: MySQL, Redis \n Server: AWS EC2, NginX \n DevOps: Git, Docker \n WebRTC: Openvidu",
	awards: "",
    contribution: "20%",
    feeling: "나랑노랑은 WebRTC프로젝트로, 원거리에 있는 사람들과 함께 게임을 즐기는 것과 가정 내에서 아이가 부모님과 재밌게 놀 수 있도록 하는 것을 목표로 하였습니다. \n 게임을 구성하면서 어린아이가 부모님과 함께 즐기도록 하려면 어떤 방식으로 만들어야 할까 고민을 많이 했고,\n UI부분에서도 단순하고, 어린아이들이 흥미를 가질 수 있도록 '노란색'을 대표색상으로 채택하여 디자인 하였고, \n 본인의 모습위에 뼈모양처럼 흰색의 실선이 생기는 '엑스레이모드'를 만들어 움직임을 더 재미있게 인식할 수 있도록 하였습니다.",
    description2:
      "🎤 주요 기능 \n 1. webRTC를 통한 여럿이 즐길 수 있는 실시간 게임, 체조 영상 제공 \n 2. Pose Detection을 통해 자세를 인식하고 이를 바탕으로 동작 유사도를 계산하여 점수 산출 \n 3. 사용자가 게임을 즐기고 있는 모습을 캡쳐하고 기록을 원하는 사용자에게 앨범 제공 \n	파트별 기능구현 \n AI \n - tfjs 라이브러리를 통해 PoseNet 모델 이용 \n - cosine similarity 계산을 통해 점수 산출 \n Frontend \n	- 회원관리, 로그인, 마이페이지 등 회원관리 유효성 검사 \n - 메인페이지 로드 시 fade in 효과 구현 \n - 날 따라해봐요 게임 구성 및 구현 \n - Openvidu를 통한 webRTC 서비스 제공 \n - 방 초대 링크 생성, 카메라 on/off, 마이크 on/off 등 툴바 기능 구현 \n - 캡처 기능을 구현해 앨범에 사진 저장 서비스 제공 \n Backend \n - 회원관리, 앨범 사진 관리, 문의내역 관리 \n - 참여자 수, 게임 상태, 점수 관련 방 정보 저장 및 인원 제한, 게임 중 참여 불가 등 openvidu 방 관리 \n - Swagger/OpenAPI를 이용하여 API 명세서 구현",
      mydescription: "",
      detailimg1: 'https://narangnorangg.s3.ap-northeast-2.amazonaws.com/narangnorang_main.gif'
  },
  {
    id: 2,
    name: "소소행",
    description:
      "소중한 사람에게 소소한 행복을, 소상공인에게 소소한 행복을! 모바일쿠폰 프로젝트",
    imageUrl:
      "https://sosoticon.s3.ap-northeast-2.amazonaws.com/sosohaeng_logo.png",
    period: "2023.08.21. ~ 2023.10.06. (7주, 6인 팀프로젝트)",
    role: "Backend \n 소소티콘(QRcode)제작, NCP 문자 발송 로직 설계, 상품 및 주문내역 관리, AWS-S3 연결(QRcode관리)",
    skills: "Front-End-App:	React-Native, Expo, Iamport \n Front-End-Web: React, styled-components, react-bootstrap \n Backend\n Web: SpringBoot, Database: MariaDB \n	CI/CD : Docker, Jenkins, Nginx \n Server: AWS-EC2",
	awards: "삼성 청년소프트웨어 아카데미 특화PJT 광주1반 1등",
    contribution: "20%",
    feeling: "외부라이브러리를 잘 활용할 수 있게 된 프로젝트였습니다. \n 문자발송을 위해 처음에는 twilio 라는 라이브러리를 사용하다가 '국제발신'등의 표기를 없애고자, NCP문자발송으로 라이브러리를 바꾸어 진행하였습니다.\n AWS의 콘솔을 만들고 S3의 버킷을 생성하여 QRcode를 관리하여 데이터의 크기를 낮추고, 보안을 유지하였습니다.",
    description2: "💝 소소행만의 특별한 기능\n 1. 사용자가 원하는 대로 커스터마이징 해서 선물가능한 선물꾸러미\n 2. 모바일쿠폰 소소티콘은 분할결제가 가능해요! \n 3. 나의 소소티콘 잔액을 쉽게 볼 수 있어요. \n 4. 선물을 주고받은 추억을 '너랑나랑' 을 통해 보관할 수 있어요. \n 5. 소상공인 사장님을 위해 수수료를 2~3%로 반영했어요. \n 6. 인기순, 가격순이 아닌 해시태그 키워드를 통한 상점 검색 \n 7. 상점별 종이 쿠폰을 대체할 모바일 스탬프쿠폰 '소복소복'\n 😊 서비스 소개 \n - 소비자 : 앱을 통해 다양한 상점과 상품 조회, 선물 구매 및 관리, 그리고 편리하게 결제 \n - 사장님 : 웹을 통해 상점 정보 및 상품 등록을 통한 소소티콘 발행, 소소티콘 매출 관리 / 앱을 통해 소소티콘 QRCode 스캔 및 사용금액 차감 기능을 통해 쉽게 거래를 처리 \n - 비회원 : 문자 메세지를 통해 선물 받은 기프티콘 사용 가능",
		mydescription: "",
    detailimg1: 'https://sosoticon.s3.ap-northeast-2.amazonaws.com/sosohang/%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.gif'

  },
  {
    id: 3,
    name: "소행성",
    description: "작은 행동으로 성장하는 우리아이, IoT 모션인식을 활용한 시뮬레이션 프로젝트",
    imageUrl:
      "https://littleplanet.s3.ap-northeast-2.amazonaws.com/littleplanet_logo.png",
    period: "2023.10.09. ~ 2023.11.17. (6주, 6인 팀프로젝트)",
    role: "Frontend, App \n 시뮬레이션 구성 및 STT, TTS구현",
    skills: "WEB: React, styled-components, Tailwind CSS \n APP:React-Native \n Backend: SpringBoot, MariaDB \n CI/CD: Docker, Jenkins, Nginx \n Server: AWS EC2 \n Hardware: Raspberrypi, Python, Posenet, TPU",
	awards: "",
    contribution: "20%",
    feeling: "",
    description2: "🚀 소행성만의 특별한 기능 🚀\n 1. 교과서에서 배우던 내용을 직접 체험할 수 있어요!\n 2. 모션 인식을 통해 시뮬레이션에 몰입할 수 있어요.\n 3. 웹소켓과 STT(Speach-to-Text), TTS(Text-to-speech)를 통해 다양한 상황을 자연스럽게 시뮬레이션 할 수 있어요! \n Backend \n 사용자 관리	\n - 회원가입, 로그인, JWT 생성 및 관리, Spring Security 통합. \n -사용자 정보 및 비밀번호 업데이트 포함. \n 학생 등록 \n - 시스템 내 학생 등록 및 삭제 프로세스 구현.	\n 메일 인증 \n - 회원가입 및 비밀번호 재설정 시 이메일 주소로 인증 코드 전송. \n REDIS \n - REDIS를 사용하여 캐릭터 이동 방향 데이터 관리 \n - 웹소켓을 통한 데이터 전송.	\n WebSocket 통신 \n - 실시간으로 여러 클라이언트에게 메시지 전송. \n - 동일한 이메일로 등록된 클라이언트 간 메시지 교환 지원.	\n S3 콘텐츠 URL 관리 \n - S3에 업로드된 콘텐츠 URL 관리.	\n OTP 인증	\n - 일회용 비밀번호(OTP) 인증 기능 구현. \n 시뮬레이션 히스토리 관리 \n Frontend - WEB \n 회원가입 및 로그인 페이지 \n - 비밀번호 오류 시 경고, 정확한 이메일 형식이 아닐 경우 오류 메시지 표시. \n 메인 페이지	\n - 앱 다운로드 QR 코드 모달창 구현. \n 콘텐츠 리스트 및 디테일 페이지 \n - 콘텐츠 목록 및 상세 정보 페이지.	\n 마이 페이지	\n - 사용자 개인 페이지, 학생 등록 페이지 \n 팀 소개 페이지 \n - 프로젝트 팀원 소개. \n Frontend - APP \n 로그인 화면	\n - AsyncStorage 사용 로그인 상태 관리	\n - 로그인 성공 시 웹소켓 연결	\n 키패드 화면, 전화 중 화면 \n STT \n - React Native Voice 사용\n Hardware - Raspi	\n OTP 입력 페이지\n - OTP 인증 기능.	\n 웹 상태 확인 페이지	\n - REDIS를 통한 웹 상태 모니터링.	\n 시뮬레이션 캠 페이지	\n - 카메라 화면을 소켓을 통해 서버로 전송.	\n 시뮬레이션 시작 페이지\n - Posenet을 사용하여 관절 좌표를 REDIS를 통해 서버로 전송.\n 서보 모터\n - 상체 중심 좌표를 기준으로 서보 모터 회전 제어.	\n Hardware - Server\n 기기 연결 및 소켓 통신\n - 연결된 기기와의 소켓 통신 지원.\n 캐릭터 이미지 변환\n - REDIS로부터 받은 관절 좌표를 사용하여 이미지 변환 처리 (멀티프로세싱으로 속도 향상)",
	mydescription: "",
    detailimg1: 'https://littleplanet.s3.ap-northeast-2.amazonaws.com/WEB_%EB%A9%94%EC%9D%B8%ED%8E%98%EC%9D%B4%EC%A7%80.gif'
  },
  {
    id: 4,
    name: "Reelix",
    description:
      "해쉬태그기반 감성단어 알고리즘으로 영화를 추천해주는 프로젝트",
    imageUrl: "https://reelix.s3.ap-northeast-2.amazonaws.com/reelix_logo.png",
    period: "2023.05.17. ~ 2023.05.25.(1주, 2인 팀프로젝트)",
    role: "ERD설계, 키워드와 영화상세데이터 매칭 및 출력",
	awards: "",
    skills: "Frontend: Vue2, JavaScript \n Backend: Django",
    contribution: "50%",
    feeling: "",
    description2: "- TMDB API를 활용하여 최고 평점 영화를 랜덤으로 출력 \n - 사용자의 위시리스트 기능을 로컬 스토리지에 저장하여 세션 유지 \n - Vue-router를 이용한 네비게이션바와 라우터 뷰 구현 \n - 데이터 폼과 리스트 컴포넌트를 효율적으로 구성하여 개발 속도 향상",
		mydescription: "",
    detailimg1: 'https://yangjihye.s3.ap-northeast-2.amazonaws.com/Reelix_main.png'
  },
];

export default projects;
