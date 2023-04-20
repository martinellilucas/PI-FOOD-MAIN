import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addRecipeDetail, cleanDetail } from "../../redux/actions";
import style from "./Detail.module.css";

export const Detail = () => {
  const recipe = useSelector((state) => state.recipeDetail);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addRecipeDetail(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [id]);

  return (
    <div className={style.detailView}>
      <h1 className={style.detailTitle}>Recipe Detail ID: {recipe.id}</h1>
      {recipe.title ? (
        <div className={style.container}>
          <h1 className={style.title}>{recipe.title}</h1>
          <hr className={style.separator}></hr>

          <h2 className={style.subTitle}>Summary</h2>
          <hr className={style.separator}></hr>
          <p className={style.text}>{recipe.summary.replace(/<[^>]*>/g, "")}</p>
          <hr className={style.separator}></hr>
          <p className={style.text}>Health Score: {recipe.healthScore}</p>
          <hr className={style.separator}></hr>
          <h2 className={style.subTitle}>Instructions</h2>
          <hr className={style.separator}></hr>
          <p className={style.text}>
            {recipe.instructions.replace(/<[^>]*>/g, "")}
          </p>
          <img className={style.image} src={recipe.image} alt={recipe.title} />
          <ul className={style.diets}>
            Diets
            <hr className={style.separator}></hr>
            {recipe.diets.map((element) => {
              return (
                <li className={style.itemList}>{element.toUpperCase()}</li>
              );
            })}
          </ul>
        </div>
      ) : (
        <h1 className={style.loading}>Loading...</h1>
      )}
    </div>
  );
};
