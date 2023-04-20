import { Link } from "react-router-dom";
import Button from "../Button/Button";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Welcome to Healthy Food</h1>
        <p className={style.text}>
          This is a web application for healthy food recipes in which we can
          search for recipes through requests to a server developed by me, which
          in turn brings the information from{" "}
          <Link className={style.link} to="https://spoonacular.com/food-api">
            the spoonacular API
          </Link>
          . At the same time we can fill out a form with our own recipes that
          will be saved in a database. You can also search for both API and
          database recipes by name. After showing the recipes brought, we can
          enter their detail by clicking on the cards shown on the home page.
          This application was developed by Lucas Martinelli during Henry's
          individual project instance. Click on the button below to enter the
          page...
        </p>
      </div>
      <Link className={style.button} to="/home">
        <Button text="Enter"></Button>
      </Link>
    </div>
  );
};
export default Landing;
