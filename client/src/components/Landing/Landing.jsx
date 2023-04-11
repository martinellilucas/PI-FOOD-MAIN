import { Link } from "react-router-dom";
import Button from "../Button/Button";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Bienvenidos a comiditas</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugit velit, ullam quod consectetur ut modi amet ratione dignissimos
          iusto veritatis. Et repellendus ipsam, quaerat ipsum facere quis at
          minima.
        </p>
      </div>
      <Link className={style.button} to="/home">
        <Button text="Ingresar"></Button>
      </Link>
    </div>
  );
};
export default Landing;
