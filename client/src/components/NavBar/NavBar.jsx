import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import image from "../../assets/images/heathy eating.png";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div className={style.searchContainer}>
        <Link to="/home">
          <img className={style.logo} alt="logo" src={image}></img>
        </Link>
        <SearchBar />
      </div>
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
