import Button from "../Button/Button";

const Form = () => {
  return (
    <form>
      <h2>Agregar receta</h2>
      <label>Nombre</label>
      <input></input>
      <label>Resumen del plato</label>
      <input></input>
      <label>Nivel de comida saludable</label>
      <input></input>
      <label>Paso a paso</label>
      <input></input>
      <label>Imagen</label>
      <input></input>
      {/* ACA VA UN SELECTBOX CON TIPOS DE DIETA */}
      <Button text="Submit"></Button>
    </form>
  );
};

export default Form;
