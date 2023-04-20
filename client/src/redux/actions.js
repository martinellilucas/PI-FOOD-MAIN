import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPE_DETAIL = "ADD_RECIPE_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
const URL_RECIPES = "http://localhost:3001/recipes";
export const getRecipes = () => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_RECIPES}`);
    dispatch({ type: GET_RECIPES, payload: response.data });
  };
};

export const addRecipeDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_RECIPES}/${id}`);
    dispatch({ type: ADD_RECIPE_DETAIL, payload: response.data });
  };
};

export const cleanDetail = () => {
  return function (dispatch) {
    dispatch({ type: CLEAN_DETAIL });
  };
};

export const searchRecipe = (name) => {
  return async function (dispatch) {
    const response = await axios.get(`${URL_RECIPES}/?name=${name}`);
    dispatch({ type: SEARCH_RECIPE, payload: response.data });
  };
};
