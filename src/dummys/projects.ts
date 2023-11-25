import { Project } from '../types/project';

const projects: Project[] = [
	{
		id: 1,
		name: '나랑노랑',
		description: '아이와 어른이 함께 "날 따라해봐요" 게임을 하며 교감하는 WebRTC 온라인 놀이방 프로젝트!',
		imageUrl:
			'https://narangnorangg.s3.ap-northeast-2.amazonaws.com/logo.png',
	},
	{
		id: 2,
		name: '소소행',
		description: '소중한 사람에게 소소한 행복을, 소상공인에게 소소한 행복을! 모바일쿠폰 프로젝트',
		imageUrl:
			'https://sosoticon.s3.ap-northeast-2.amazonaws.com/sosohaeng_logo.png',
	},
	{
		id: 3,
		name: '소행성',
		description: '작은 행동으로 성장하는 우리아이, 119신고 시뮬레이션 프로젝트',
		imageUrl:
			'https://littleplanet.s3.ap-northeast-2.amazonaws.com/%EC%86%8C%ED%96%89%EC%84%B1%EB%A1%9C%EA%B3%A0.png',
	},
	{
		id: 4,
		name: 'Reelix',
		description: '해쉬태그기반 감성단어 알고리즘으로 영화를 추천해주는 프로젝트',
		imageUrl:
			'https://littleplanet.s3.ap-northeast-2.amazonaws.com/image/%EC%9D%B4%EB%A5%BC%EC%9E%98%EB%8B%A6%EC%95%84%EC%9A%942.png',
	}
];

export default projects;
