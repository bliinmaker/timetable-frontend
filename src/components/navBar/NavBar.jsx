import React from 'react'
import { NavLink } from 'react-router-dom';
import logoSrc from '../../assets/UNiVERSiTY.svg'

export const NavBar = () => {
  const linksTexts = [
    {
      text: 'расписание',
      path: '/',
    },
    {
      text: 'личный кабинет',
      path: '/profile',
    },
    {
      text: 'успеваемость',
      path: '/grades',
    },
    {
      text: 'чат',
      path: '/chat',
    },
  ];

  return (
    <div className="navbar">
      <a className="navbar__logo" href="/">
        <img
          src={logoSrc}
          width={213}
          height={71}
          alt="logo."
        />
      </a>
      <nav className="navbar__navigation">
        <ul className="navbar__links">
          {
            linksTexts.map(({text, path}) => (
              <li className="navbar__link-item" key={text}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (
                    console.log(isActive), [
                      'navbar__link',
                      isActive ? 'navbar__link--active' : '',
                    ].join(' ')
                  )}
                >
                  {text}
                </NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
    </div>
  );
};
