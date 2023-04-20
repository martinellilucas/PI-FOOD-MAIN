const axios = require("axios");
const { Recipe } = require("../db");
const { Op } = require("sequelize");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipeByName = async (name) => {
  const recipesApi = await axios(
    `${URL}/complexSearch?query=${name}&apiKey=c7be2639cddf46fb9e6f28f716a3fb56`
  ).then((res) => {
    const recipes = res.data.results.map((recipe) => {
      return { ...recipe };
    });
    return recipes;
  });
  const recipesDB = await Recipe.findAll({
    where: { title: { [Op.iLike]: `%${name}%` } },
  });
  return [...recipesDB, ...recipesApi];
};

module.exports = getRecipeByName;
