import style from "./Card.module.css";
import { Link } from "react-router-dom";
const Card = ({ title, image, id, healthScore, diets }) => {
  const dietsName = [];
  dietsName.push(diets?.map((diet) => diet.name));

  return (
    <Link className={style.card} to={`/detail/${id}`}>
      <img src={image} alt={title} className={style.image} />
      <h1 className={style.title}>{title}</h1>
      <h2 className={style.subTitle}>Health Score: {healthScore}</h2>
      <h2 className={style.subTitle}>Diets</h2>
      <textarea className={style.diets} value={dietsName.join(" ")} />
    </Link>
  );
};

export default Card;
