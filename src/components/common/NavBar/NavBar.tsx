import React from "react";
import { Link } from "react-router-dom";
import { NavBarWrapper, NavBarLink } from "./style";
import logo from "../../../assets/images/logo.png";

function NavBar() {
  return (
    <NavBarWrapper>
      <div className="nav-container">
        <ul>
          <div className="nav-logo">
            <img src={logo} alt="" />
            <NavBarLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              JiHye's Portolio
            </NavBarLink>
          </div>
          <div className="nav-item gap-8">
		  {/* <li>
              <NavBarLink
                to="/signin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                프로젝트
              </NavBarLink>
            </li>
            <li>
              <NavBarLink
                to="/signin"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                회원가입
              </NavBarLink>
            </li> */}
            <li>
              <NavBarLink
                to="/hello"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Say Hello
              </NavBarLink>
            </li>
          </div>
        </ul>
      </div>
    </NavBarWrapper>
  );
}
export default NavBar;
