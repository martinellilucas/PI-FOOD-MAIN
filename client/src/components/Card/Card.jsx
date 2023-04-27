import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ title, image, id, healthScore, diets }) => {
  return (
    <Link className={style.card} to={`/detail/${id}`}>
      <img src={image} alt={title} className={style.image} />
      <h1 className={style.title}>{title}</h1>
      <h2 className={style.subTitle}>Health Score: {healthScore}</h2>
      <h2 className={style.subTitle}>Diets:</h2>
      <ul className={style.list}>
        {diets.map((diet) => {
          return <li key={diet.id}>{diet.name.toUpperCase()}</li>;
        })}
      </ul>
    </Link>
  );
};

export default Card;
