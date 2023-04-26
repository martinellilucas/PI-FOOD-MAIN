import axios from "axios";

export const GET_RECIPES = "GET_RECIPES";
export const ADD_RECIPE_DETAIL = "ADD_RECIPE_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const SEARCH_RECIPE = "SEARCH_RECIPE";
export const GET_DIETS = "GET_DIETS";
export const POST_RECIPE = "POST_RECIPE";
export const ORDER = "ORDER";
export const FILTER = "FILTER";

export const order = (judgment) => {
  return { type: ORDER, payload: judgment };
};
export const filter = (judgment) => {
  return { type: FILTER, payload: judgment };
};
export const postRecipe = (recipe) => {
  return async function () {
    await axios.post("/recipes", recipe).then((res) => {
      return res.data;
    });
  };
};

export const getDiets = () => {
  return async function (dispatch) {
    const response = await axios.get("/diets");
    dispatch({ type: GET_DIETS, payload: response.data });
  };
};

export const getRecipes = () => {
  return async function (dispatch) {
    const response = await axios.get("/recipes");
    dispatch({ type: GET_RECIPES, payload: response.data });
  };
};

export const addRecipeDetail = (id) => {
  return async function (dispatch) {
    const response = await axios.get(`/recipes/${id}`);
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
    const response = await axios.get(`/recipes/?name=${name}`);
    dispatch({ type: SEARCH_RECIPE, payload: response.data });
  };
};
