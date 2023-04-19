const { Diet } = require("../db");
const axios = require("axios");
require("dotenv").config();
const { API_KEY, URL } = process.env;

const getDiets = async () => {
  let diets = await Diet.findAll();
  if (!diets.length) {
    axios(
      `${URL}/complexSearch?apiKey=b8e39871e419456fb99421c433550d65&number=100&addRecipeInformation=true`
    ).then(async ({ data }) => {
      const aux = data.results.flatMap((e) => e.diets); // ignora los elementos vacios
      const arr = new Set(aux); // eliminamos repetidos
      const apiDiets = [...arr, "vegetarian"]; // agrego vegetarian ya que no me lo trae de la api
      apiDiets.forEach(async (diet) => await Diet.create({ name: diet }));
    });
  }
  diets = await Diet.findAll();
  return diets;
};

module.exports = getDiets;
