import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div className={style.menuContainer}>
        <Link to="/home" className={style.menuText}>
          Home
        </Link>
        <Link to="/form" className={style.menuText}>
          Form
        </Link>
        <Link to="/about" className={style.menuText}>
          About
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
