const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipeById = (id) => {
  return axios(
    `${URL}/${id}/information?apiKey=b8e39871e419456fb99421c433550d65`
  ).then((res) => {
    const recipe = res.data;
    return recipe;
  });
};

module.exports = getRecipeById;
