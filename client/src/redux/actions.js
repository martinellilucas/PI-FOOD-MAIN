import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";

export const getRecipes = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/recipes");
    dispatch({ type: GET_RECIPES, payload: response.data });
  };
};
