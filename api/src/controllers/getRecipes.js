const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;
const { Recipe } = require("../db");

const getRecipes = async () => {
  const recipes = await axios(
    `${URL}/complexSearch?apiKey=c7be2639cddf46fb9e6f28f716a3fb56&number=100&instructionsRequired=true`
  ).then(async ({ data }) => {
    const recipesApi = await data.results.map((res) => {
      return { ...res };
    });
    return recipesApi;
  });
  const recipesDB = await Recipe.findAll();
  return [...recipesDB, ...recipes];
};

module.exports = getRecipes;
