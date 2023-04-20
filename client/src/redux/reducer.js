import {
  ADD_RECIPE_DETAIL,
  CLEAN_DETAIL,
  GET_RECIPES,
  SEARCH_RECIPE,
} from "./actions";

const initialState = { recipes: [], recipeDetail: {}, allRecipes: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: [...action.payload],
      };
    case SEARCH_RECIPE:
      return {
        ...state,
        allRecipes: [...state.recipes],
        recipes: [...action.payload],
      };
    case ADD_RECIPE_DETAIL:
      const { id, title, summary, healthScore, instructions, image, diets } =
        action.payload;
      return {
        ...state,
        recipeDetail: {
          id,
          title,
          summary,
          healthScore,
          instructions,
          image,
          diets: [...diets, action.payload.vegetarian ? "vegetarian" : ""],
        },
      };
    case CLEAN_DETAIL:
      return { ...state, recipeDetail: {} };
    default:
      return { ...state };
  }
};

export default reducer;
