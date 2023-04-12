import Cards from "../Cards/Cards";
import Carrousel from "../Carrousel/Carrousel";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div className={style.home}>
      <Carrousel />
      <h1 className={style.title}>Recetas</h1>
      <Cards></Cards>
    </div>
  );
};

export default Home;
