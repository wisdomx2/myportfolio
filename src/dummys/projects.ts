import { Project } from '../types/project';

const projects: Project[] = [
	{
		id: 1,
		name: '나랑노랑',
		description: '아이와 어른이 "날 따라해봐요" 게임으로 함께하는 WebRTC 온라인 놀이방 프로젝트!',
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
			'https://littleplanet.s3.ap-northeast-2.amazonaws.com/littleplanet_logo.png',
	},
	{
		id: 4,
		name: 'Reelix',
		description: '해쉬태그기반 감성단어 알고리즘으로 영화를 추천해주는 프로젝트',
		imageUrl:
			'https://reelix.s3.ap-northeast-2.amazonaws.com/reelix_logo.png',
	}
];

export default projects;
