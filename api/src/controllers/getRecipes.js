const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipes = () => {
  return axios(`${URL}?apiKey=${API_KEY}&number=100`).then(async ({ data }) => {
    const recipesApi = await data.results.map((res) => {
      return { ...res };
    });
    return recipesApi;
  });
};

module.exports = getRecipes;
