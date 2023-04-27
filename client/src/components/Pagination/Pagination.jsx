import Button from "../Button/Button";
import style from "./Pagination.module.css";
const Pagination = ({
  recipesPerPage,
  currentPage,
  setCurrentPage,
  totalRecipes,
}) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
    pages.push(i);
  }

  const handleNext = () => {
    if (currentPage < pages.length) setCurrentPage(currentPage + 1);
    else alert("No more pages found");
  };

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
    else alert("No more pages found");
  };

  const onSpecificPage = (n) => {
    setCurrentPage(n);
  };

  return (
    <div className={style.container}>
      <Button display={true} text="⬅" onClick={handlePrevious} />
      <ul className={style.list}>
        {pages?.map((nPage) => (
          <li key={nPage}>
            <a
              onClick={() => onSpecificPage(nPage)}
              className={
                currentPage === nPage ? style.isActive : style.noActive
              }
            >
              {nPage}
            </a>
          </li>
        ))}
      </ul>
      <Button display={true} text="➡" onClick={handleNext} />
    </div>
  );
};

export default Pagination;
