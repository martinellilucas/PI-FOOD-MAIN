const axios = require("axios");
const { Recipe } = require("../db");

const postRecipe = async ({
  title,
  image,
  summary,
  score,
  instructions,
  diets,
}) => {
  const recipe = await Recipe.create({
    title,
    image,
    summary,
    score,
    instructions,
  });
  await recipe.addDiet(diets);
};

module.exports = postRecipe;
