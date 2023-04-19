const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipes = () => {
  return axios(
    `${URL}/complexSearch?apiKey=ce9cda978dc5474e9d55676a2ad64194&number=100&instructionsRequired=true`
  ).then(async ({ data }) => {
    const recipesApi = await data.results.map((res) => {
      return { ...res };
    });
    return recipesApi;
  });
};

module.exports = getRecipes;
