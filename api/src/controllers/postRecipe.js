const axios = require("axios");
const { Recipe } = require("../db");

const postRecipe = async ({ name, image, summary, score, steps }) => {
  await Recipe.create({ name, image, summary, score, steps });
};

module.exports = postRecipe;
