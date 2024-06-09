import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logoSrc from "../../assets/UNiVERSiTY.svg";
import axios from "axios";

export const NavBar = () => {
  const navigate = useNavigate();
  const linksTexts = [
    {
      text: "расписание",
      path: "/",
    },
    {
      text: "личный кабинет",
      path: "/profile",
    },
    {
      text: "учителя",
      path: "/teachers",
    },
  ];
  function submitLogout(e) {
    e.preventDefault();
    try {
      axios.post("http://127.0.0.1:8000/api/logout/");
      navigate("/auth");
    } catch (error) {
      console.error("Неудалось выйти", error);
    }
  }

  return (
    <div className="navbar">
      <a className="navbar__logo" href="/">
        <img src={logoSrc} width={213} height={71} alt="logo" />
      </a>
      <nav className="navbar__navigation">
        <ul className="navbar__links">
          {linksTexts.map(({ text, path }) => (
            <li className="navbar__link-item" key={text}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  ["navbar__link", isActive ? "navbar__link--active" : ""].join(
                    " "
                  )
                }
              >
                {text}
              </NavLink>
            </li>
          ))}
          <li className="navbar__link-item">
            <NavLink
              onClick={(event) => submitLogout(event)}
              className="navbar__link"
            >
              выйти
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
