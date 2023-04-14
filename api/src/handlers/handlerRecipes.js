const handlerIdRecipe = (req, res) => {
  res.status(200).send("esta es una receta por id: " + req.params.id);
};
const handlerNameRecipe = (req, res) => {
  const { name } = req.query;
  if (name) res.status(200).send("esta es una receta por name: " + name);
  res.status(200).send("todas las recetas");
};
const handlerPostRecipe = (req, res) => {
  res.status(200).send("este es un POST de una receta: " + req.body.name);
};

module.exports = {
  handlerIdRecipe,
  handlerNameRecipe,
  handlerPostRecipe,
};
