import { useState } from "react";
import Button from "../Button/Button";
import style from "./Form.module.css";
import { validation } from "./validation";

const Form = () => {
  const [form, setForm] = useState();
  const [errors, setErrors] = useState();

  const handleChange = (event) => {
    const value = event.target.value;
    const target = event.target.name;
    setForm({ ...form, [target]: value });
    validation({ ...form, [target]: value }, errors, setErrors, target);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
          className={style.input}
        ></textarea>
        <label htmlFor="healthscore" className={style.label}>
          Health Score
        </label>
        <input
          onChange={handleChange}
          placeholder="Enter the health score of the recipe"
          type="number"
          name="healthscore"
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
          className={style.input}
        ></input>
        {/* ACA VA UN SELECTBOX CON TIPOS DE DIETA */}
        <Button text="Submit" className={style.button}></Button>
      </form>
    </div>
  );
};

export default Form;
