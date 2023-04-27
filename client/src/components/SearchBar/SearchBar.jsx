import { useEffect, useState } from "react";
import style from "./SearchBar.module.css";
import { useDispatch } from "react-redux";
import { searchRecipe } from "../../redux/actions";

const SearchBar = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    setCurrentPage(1);
  };
  useEffect(() => {
    dispatch(searchRecipe(search));
  }, [search, dispatch]);

  return (
    <div className={style.container}>
      <input
        onChange={handleChange}
        className={style.input}
        value={search}
        type="search"
        placeholder="Search"
      ></input>
    </div>
  );
};

export default SearchBar;
