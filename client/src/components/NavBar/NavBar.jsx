import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div className={style.searchContainer}>
        <SearchBar />
      </div>
      <div className={style.menuContainer}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? style.active : style.menuText
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/form"
          className={({ isActive }) =>
            isActive ? style.active : style.menuText
          }
        >
          Form
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? style.active : style.menuText
          }
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
