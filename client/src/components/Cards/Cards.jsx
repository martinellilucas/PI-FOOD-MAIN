import Card from "../Card/Card";
import style from "./Cards.module.css";
const Cards = (props) => {
  return (
    <div className={style.container}>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default Cards;
