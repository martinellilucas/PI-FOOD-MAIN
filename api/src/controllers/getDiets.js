const { Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getDiets = async () => {
  return axios
    .get(`${URL}?apiKey=${API_KEY}&number=100&addRecipeInformation=true`)
    .then(async ({ data }) => {
      const aux = data.results.flatMap((e) => e.diets); // ignora los elementos vacios
      const arr = new Set(aux); // eliminamos repetidos
      const diets = [...arr, "vegetarian"]; // agrego vegetarian ya que no me lo trae de la api
      diets.forEach(async (dieta) => {
        await Diet.create({ name: dieta });
      });
    });
};

module.exports = getDiets;
