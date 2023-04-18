const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipes = () => {
  return axios(
    `${URL}/complexSearch?apiKey=07bd6759d3e149aab857123260d6c9e2&number=100&instructionsRequired=true`
  ).then(async ({ data }) => {
    const recipesApi = await data.results.map((res) => {
      return { ...res };
    });
    return recipesApi;
  });
};

module.exports = getRecipes;
