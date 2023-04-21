import { useDispatch, useSelector } from "react-redux";
import Cards from "../Cards/Cards";
import Carrousel from "../Carrousel/Carrousel";
import style from "./Home.module.css";
import { getDiets, getRecipes } from "../../redux/actions";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, diets } = useSelector((state) => state);

  const pagination = () => {
    return recipes.slice(firstRecipeInPage, firstRecipeInPage + 9);
  };

  const handleNext = () => {
    if (firstRecipeInPage < recipes.length)
      setCurretPage(firstRecipeInPage + 9);
  };
  const handlePrevius = () => {
    if (firstRecipeInPage > 0) setCurretPage(firstRecipeInPage - 9);
  };

  const [firstRecipeInPage, setCurretPage] = useState(0);
  useEffect(() => {
    dispatch(getDiets());
    console.log(diets);
    dispatch(getRecipes());
  }, []);

  return (
    <div className={style.home}>
      <Carrousel />
      <h1 className={style.title}>Recipes</h1>
      <div className={style.buttonsContainer}>
        <Button text="Previus" onClick={handlePrevius} />
        <Button text="Next" onClick={handleNext} />
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
