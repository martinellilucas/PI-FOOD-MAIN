const getRecipeById = require("../controllers/getRecipeById");
const getRecipeByName = require("../controllers/getRecipeByName");
const getRecipes = require("../controllers/getRecipes");
const postRecipe = require("../controllers/postRecipe");

const handlerIdRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await getRecipeById(id);
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerNameRecipe = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) res.status(200).json(await getRecipeByName(name));
    res.status(200).json(await getRecipes());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerPostRecipe = (req, res) => {
  try {
    const { name, image, summary, score, steps } = req.body;
    postRecipe({ name, image, summary, score, steps });
    res.status(200).json({ exito: { name, image, summary, score, steps } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const handlerGetRecipes = async (req, res) => {
  try {
    const recipesApi = await getRecipes();
    res.status(200).json(recipesApi);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  handlerIdRecipe,
  handlerNameRecipe,
  handlerPostRecipe,
  handlerGetRecipes,
};
