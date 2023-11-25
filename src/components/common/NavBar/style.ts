/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavBarWrapper = styled.div`
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

@keyframes nav-logo-spin {
	from {
	  transform: rotate(0deg);
	}
	to {
	  transform: rotate(360deg);
	}
  }
	.nav-container {
		background-color: white;
		padding: 0rem 2rem;
		color: black;
	}

	.nav-container ul {
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 0px;
	}

	.nav-container li {
		cursor: pointer;
		font-size: 1.5rem;
	}

	.nav-container li:hover {
		transition: 0.2 ease;
		color: white;
	}
	.nav-logo {
		display: flex;
		justiy-content: center;
		align-items: center;
		font-size: 1.5rem;
	}
	.nav-logo img {
		width: 80px;
		height: auto;
		animation: nav-logo-spin infinite 20s linear;
	}
	.nav-item {
		display: flex;
	}
`;

export const NavBarLink = styled(NavLink)`
	text-decoration: none;
	color: gray;
	font-weight: bold;
	&.active {
		color: #c5dae3; // 활성화된 링크의 색상
		font-weight: bold;
	}
`;
