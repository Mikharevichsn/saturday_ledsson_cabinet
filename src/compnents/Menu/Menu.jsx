import React from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import s from "./Menu.module.css";
// import './Menu.css';

export const Menu = ({ links = [] }) => {
  return (
    <nav className={s.menu}>
      <ul>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink
              to={link.href}
              className={
                ({ isActive }) => cn(s.link, { [s.active]: isActive })
                // ({ isActive }) => cn('link', { active: isActive })
                // isActive ? 'activeClassName' : undefined
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
        {/* {links.map(({ title }) => (
          <li key={title}></li>
        ))} */}
      </ul>
    </nav>
  );
};
