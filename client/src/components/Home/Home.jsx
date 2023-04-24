import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Carrousel from "../Carrousel/Carrousel";
import style from "./Home.module.css";
import { filter, getDiets, getRecipes, order } from "../../redux/actions";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, diets } = useSelector((state) => state);

  const pagination = () => {
    return recipes.slice(firstRecipeInPage, firstRecipeInPage + 9);
  };

  const handleNext = () => {
    if (firstRecipeInPage < recipes.length - 9)
      setCurretPage(firstRecipeInPage + 9);
  };
  const handlePrevius = () => {
    if (firstRecipeInPage > 0) setCurretPage(firstRecipeInPage - 9);
  };
  const handleOrder = (event) => {
    const judgment = event.target.value;
    dispatch(order(judgment));
  };
  const handleFilter = (event) => {
    const judgment = event.target.value;
    dispatch(filter(judgment));
  };
  const [firstRecipeInPage, setCurretPage] = useState(0);
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

        <Button display={true} text="Previus" onClick={handlePrevius} />
        <Button display={true} text="Next" onClick={handleNext} />
      </div>
      {recipes.length ? (
        <Cards recipes={pagination()}></Cards>
      ) : (
        <h1 className={style.loading}>Loading...</h1>
      )}
    </div>
  );
};

export default Home;
