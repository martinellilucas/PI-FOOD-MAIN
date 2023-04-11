import Cards from "../Cards/Cards";
import Carrousel from "../Carrousel/Carrousel";
import style from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Carrousel />
      <div className={style.container}>
        <h1 className={style.title}>Recetas</h1>
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Home;
