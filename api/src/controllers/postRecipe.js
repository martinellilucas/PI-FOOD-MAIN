const axios = require("axios");
const { Recipe } = require("../db");

const postRecipe = async ({ title, image, summary, score, instructions }) => {
  await Recipe.create({ title, image, summary, score, instructions });
};

module.exports = postRecipe;
