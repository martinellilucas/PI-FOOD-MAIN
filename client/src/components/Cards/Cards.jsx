import Card from "../Card/Card";
import style from "./Cards.module.css";
const Cards = ({ recipes }) => {
  return (
    <div className={style.container}>
      {recipes.map(({ title, image, id }) => {
        return <Card key={id} id={id} name={title} image={image} />;
      })}
    </div>
  );
};

export default Cards;
