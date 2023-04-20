const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;
const { Recipe } = require("../db");

const getRecipeById = async (id) => {
  const validUUID =
    /[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}/;
  if (!validUUID.test(id)) {
    return axios(
      `${URL}/${id}/information?apiKey=c7be2639cddf46fb9e6f28f716a3fb56`
    ).then((res) => {
      const recipe = res.data;
      return recipe;
    });
  } else {
    return await Recipe.findByPk(id.toString());
  }
};

module.exports = getRecipeById;
