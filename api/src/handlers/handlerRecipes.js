const getRecipes = require("../controllers/getRecipes");
const postRecipe = require("../controllers/postRecipe");

const handlerIdRecipe = (req, res) => {
  res.status(200).send("esta es una receta por id: " + req.params.id);
};

const handlerNameRecipe = (req, res) => {
  const { name } = req.query;
  if (name) res.status(200).send("esta es una receta por name: " + name);
  res.status(200).send("todas las recetas");
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
