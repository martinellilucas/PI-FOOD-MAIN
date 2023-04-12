import style from "./Card.module.css";

const Card = () => {
  return (
    <div className={style.card}>
      <h1 className={style.title}>TARJETA</h1>
      <p className={style.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, quia
        qui commodi perspiciatis nisi repellendus veniam magnam voluptate
        laborum iusto velit necessitatibus quae esse autem tenetur tempora
        fugiat, rem repudiandae? Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Corporis nemo, alias magnam repellat iusto aut
        cupiditate, ullam amet exercitationem molestiae, possimus quidem iste
        dolores accusamus commodi soluta? Id, aperiam rerum?
      </p>
    </div>
  );
};

export default Card;
