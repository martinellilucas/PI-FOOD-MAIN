import style from "./Carrousel.module.css";
const Carrousel = () => {
  return (
    <div className={style.carrousel}>
      <div className={style.uno} />
      <div className={style.dos} />
      <div className={style.tres} />
      <div className={style.cuatro} />
      <div className={style.cinco} />
    </div>
  );
};

export default Carrousel;
