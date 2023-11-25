import React from 'react';
import { Link } from 'react-router-dom';
import { NavBarWrapper, NavBarLink } from './style';



function NavBar() {
return(
    <NavBarWrapper>
			<div className="nav-container">
				<ul>
				<li>
						<NavBarLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
							JiHye's Portolio
						</NavBarLink>
					</li>
					<li>
						<NavBarLink to="/signin" className={({ isActive }) => (isActive ? 'active' : '')}>
							회원가입
						</NavBarLink>
					</li>
					<li>
						<NavBarLink to="/hello" className={({ isActive }) => (isActive ? 'active' : '')}>
							Say Hello
						</NavBarLink>
					</li>
					{/* <li>
						<NavBarLink to="/simulationlist" className={({ isActive }) => (isActive ? 'active' : '')}>
							시뮬레이션
						</NavBarLink>
					</li>
					<li>
						<NavBarLink to="/gamelist" className={({ isActive }) => (isActive ? 'active' : '')}>
							게임
						</NavBarLink>
					</li>
					<li>
						<NavBarLink to="/mypage" className={({ isActive }) => (isActive ? 'active' : '')}>
							마이페이지
						</NavBarLink>
					</li>
					{userMail ? (
						<li>
							<Link to="/main" onClick={handleLogout}>
								로그아웃
							</Link>
						</li>
					) : (
						<li>
							<NavBarLink to="/" onClick={handleLogout}>
								로그인
							</NavBarLink>
						</li>
					)} */}
				</ul>
			</div>
		</NavBarWrapper>
)
}
export default NavBar;