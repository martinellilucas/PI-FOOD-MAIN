const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getRecipeById = (id) => {
  return axios(`${URL}/id?apiKey=${API_KEY}`).then((data) => {});
};
