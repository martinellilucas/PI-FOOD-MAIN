import Button from "../Button/Button";
import style from "./Form.module.css";

const Form = () => {
  return (
    <div className={style.container}>
      <h2 className={style.title}>Agregue su propia receta !</h2>
      <form className={style.form}>
        <label className={style.label}>Nombre</label>
        <input className={style.input}></input>
        <label className={style.label}>Resumen del plato</label>
        <input className={style.input}></input>
        <label className={style.label}>Nivel de comida saludable</label>
        <input className={style.input}></input>
        <label className={style.label}>Paso a paso</label>
        <textarea className={style.input}></textarea>
        <label className={style.label}>Imagen</label>
        <input className={style.input}></input>
        {/* ACA VA UN SELECTBOX CON TIPOS DE DIETA */}
        <Button text="Submit" className={style.button}></Button>
      </form>
    </div>
  );
};

export default Form;
