import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Carrousel from "../Carrousel/Carrousel";
import style from "./Home.module.css";
import { filter, getDiets, getRecipes, order } from "../../redux/actions";
import { useEffect, useState } from "react";

import Pagination from "../Pagination/Pagination";

const Home = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const { recipes, diets } = useSelector((state) => state);

  const [recipesPerPage] = useState(9);

  const totalRecipes = recipes.length;
  const lastIndex = currentPage * recipesPerPage;
  const firstIndex = lastIndex - recipesPerPage;

  const handleOrder = (event) => {
    const judgment = event.target.value;
    dispatch(order(judgment));
    setCurrentPage(1);
  };
  const handleFilter = (event) => {
    const judgment = event.target.value;
    dispatch(filter(judgment));
    setCurrentPage(1);
  };

  useEffect(() => {
    dispatch(getDiets());
    dispatch(getRecipes());
  }, [dispatch]);

  return (
    <div className={style.home}>
      <Carrousel />
      <h1 className={style.title}>Recipes</h1>

      <div className={style.buttonsContainer}>
        <select className={style.menu} name="order" onChange={handleOrder}>
          <option className={style.menuOption}>Order</option>
          <option className={style.menuOption} value="ascendenteAlf">
            A-Z ⬆
          </option>
          <option className={style.menuOption} value="descendenteAlf">
            Z-A ⬇
          </option>
          <option className={style.menuOption} value="ascendenteHS">
            Health score ⬆
          </option>
          <option className={style.menuOption} value="descendenteHS">
            Health score ⬇
          </option>
        </select>
        <select className={style.menu} name="filter" onChange={handleFilter}>
          <option>All</option>

          {diets.length ? (
            diets.map((diet) => {
              return <option key={diet.id}>{diet.name}</option>;
            })
          ) : (
            <></>
          )}
          <option value="db">Data Base</option>
          <option value="api">Spoon API</option>
        </select>
      </div>
      <Pagination
        recipesPerPage={recipesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalRecipes={totalRecipes}
      />
      {recipes.length ? (
        <Cards recipes={recipes.slice(firstIndex, lastIndex)}></Cards>
      ) : (
        <h1 className={style.loading}>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
