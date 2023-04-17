const { Router } = require("express");
const {
  handlerIdRecipe,
  handlerNameRecipe,
  handlerPostRecipe,
  handlerGetRecipes,
} = require("../handlers/handlerRecipes");
const routeRecipes = Router();

routeRecipes.get("/", handlerGetRecipes);
routeRecipes.get("/:id", handlerIdRecipe);
routeRecipes.get("/:name?", handlerNameRecipe);
routeRecipes.post("/", handlerPostRecipe);

module.exports = routeRecipes;
