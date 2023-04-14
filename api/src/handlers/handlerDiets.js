const getDiets = require("../controllers/getDiets");

const handlerGetDiets = async (req, res) => {
  try {
    res.status(200).json("Todas las dietas: " + (await getDiets()));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = handlerGetDiets;
