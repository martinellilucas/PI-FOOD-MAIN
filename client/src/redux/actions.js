import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPE_DETAIL = "ADD_RECIPE_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";

export const getRecipes = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/recipes");
    dispatch({ type: GET_RECIPES, payload: response.data });
  };
};

export const addRecipeDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/recipes/${id}`);
    dispatch({ type: ADD_RECIPE_DETAIL, payload: response.data });
  };
};

export const cleanDetail = () => {
  return function (dispatch) {
    dispatch({ type: CLEAN_DETAIL });
  };
};
