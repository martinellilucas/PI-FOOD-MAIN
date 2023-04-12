import { Link } from "react-router-dom";
import Button from "../Button/Button";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h1 className={style.title}>Bienvenidos a Healthy Food</h1>
        <p className={style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          fugit velit, ullam quod consectetur ut modi amet ratione dignissimos
          iusto veritatis. Et repellendus ipsam, quaerat ipsum facere quis at
          minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
          fugit natus magni maxime explicabo quae commodi aspernatur illum iure
          quidem asperiores quibusdam harum, pariatur eius, error non
          perspiciatis qui? Possimus. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Cupiditate temporibus error cum quibusdam laboriosam
          minus soluta omnis natus eligendi ipsa corrupti recusandae ullam
          autem, a, quo tempora dolores eos vel? Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Reiciendis
        </p>
      </div>
      <Link className={style.button} to="/home">
        <Button text="Ingresar"></Button>
      </Link>
    </div>
  );
};
export default Landing;
