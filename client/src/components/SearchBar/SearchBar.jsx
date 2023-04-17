import style from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={style.container}>
      <input
        className={style.input}
        type="search"
        placeholder="Buscar receta"
      ></input>
    </div>
  );
};

export default SearchBar;