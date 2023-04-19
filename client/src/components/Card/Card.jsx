import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ name, image, id }) => {
  return (
    <div className={style.card}>
      <h1 className={style.title}>{name}</h1>
      <Link to={`/detail/${id}`}>
        <img src={image} alt={name} className={style.image} />
      </Link>
    </div>
  );
};

export default Card;
