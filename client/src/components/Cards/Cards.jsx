import Card from "../Card/Card";
import style from "./Cards.module.css";
const Cards = ({ recipes }) => {
  return (
    <div className={style.container}>
      {recipes.map(({ title, image, id, diets, healthScore }) => {
        return (
          <Card
            key={id}
            id={id}
            title={title}
            image={image}
            diets={diets}
            healthScore={healthScore}
          />
        );
      })}
    </div>
  );
};

export default Cards;
