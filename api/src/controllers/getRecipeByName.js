const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipeByName = (name) => {
  return axios(
    `${URL}/complexSearch?apiKey=07bd6759d3e149aab857123260d6c9e2&query=${name}&addRecipeInformation=true`
  ).then((res) => {
    const recipes = [...res.results];
    return recipes;
  });
};

module.exports = getRecipeByName;
