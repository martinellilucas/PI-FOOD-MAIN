const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipeById = (id) => {
  return axios(
    `${URL}/${id}/information?apiKey=ce9cda978dc5474e9d55676a2ad64194`
  ).then((res) => {
    const recipe = res.data;
    return recipe;
  });
};

module.exports = getRecipeById;
