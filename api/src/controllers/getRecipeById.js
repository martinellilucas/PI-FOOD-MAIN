const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipeById = (id) => {
  return axios(
    `${URL}/${id}/information?apiKey=07bd6759d3e149aab857123260d6c9e2`
  ).then((res) => {
    const recipe = res.data;
    return recipe;
  });
};

module.exports = getRecipeById;
