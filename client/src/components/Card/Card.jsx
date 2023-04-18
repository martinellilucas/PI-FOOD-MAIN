import style from "./Card.module.css";

const Card = ({ name, image, id }) => {
  return (
    <div className={style.card}>
      <h1 className={style.title}>{name}</h1>
      <img src={image} alt={name} className={style.image} />
    </div>
  );
};

export default Card;
