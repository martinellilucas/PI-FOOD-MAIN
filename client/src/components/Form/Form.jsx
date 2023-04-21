import { useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "./Form.module.css";
import { validation } from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { getDiets } from "../../redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, []);

  const [form, setForm] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    instructions: "",
    image: "",
    diets: [],
  });

  const [errors, setErrors] = useState({
    title: "",
    summary: "",
    healthScore: 0,
    instructions: "",
    image: "",
    diets: [],
  });

  const handleChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;

    console.log(typeof target);

    const regexNum = /^([0-9])*$/;
    if (regexNum.test(target))
      setForm({ ...form, diets: [...form.diets, parseInt(target)] });
    else {
      setForm({ ...form, [target]: value });

      validation({ ...form, [target]: value }, errors, setErrors, target);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <div className={style.container}>
      <h2 className={style.title}>Add your own recipe !</h2>
      <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor="title" className={style.label}>
          Title
        </label>
        <input
          onChange={handleChange}
          placeholder="Enter the title"
          type="text"
          name="title"
          value={form.title}
          className={style.input}
        ></input>
        <label htmlFor="summary" className={style.label}>
          Summary
        </label>
        <textarea
          onChange={handleChange}
          placeholder="Enter the summary of the recipe"
          type="text"
          name="summary"
          value={form.summary}
          className={style.input}
        ></textarea>
        <label htmlFor="healthscore" className={style.label}>
          Health Score
        </label>
        <input
          onChange={handleChange}
          placeholder="Enter the health score of the recipe"
          type="number"
          name="healthScore"
          value={form.healthScore}
          className={style.input}
        ></input>
        <label htmlFor="instructions" className={style.label}>
          Instructions
        </label>
        <textarea
          onChange={handleChange}
          placeholder="Enter the step by step of the recipe"
          type="text"
          name="instructions"
          value={form.instructions}
          className={style.input}
        ></textarea>
        <label htmlFor="image" className={style.label}>
          Image
        </label>
        <input
          onChange={handleChange}
          placeholder="Enter the url of the image"
          type="text"
          name="image"
          value={form.image}
          className={style.input}
        ></input>
        <h2 className={style.label}>
          Select the diets which your recipe belongs to:
        </h2>
        {diets.map((diet) => {
          return (
            <div key={diet.id}>
              <label htmlFor={diet.id} className={style.label}>
                {diet.name.toUpperCase()}
              </label>
              <input
                className={style.checkbox}
                type="checkbox"
                name={diet.id}
                id={diet.id}
                onChange={handleChange}
              ></input>
            </div>
          );
        })}
        {/* ACA VA UN SELECTBOX CON TIPOS DE DIETA */}
        <Button text="Submit" className={style.button}></Button>
      </form>
    </div>
  );
};

export default Form;
