const Continent = require("./continent.model");
const { setError } = require("../../utils/errors/error");

const getAllContinents = async (req, res, next) => {
  try {
    const continentsDB = await Continent.find();
    return res.status(200).json(continentsDB);
  } catch (error) {
    return next(setError(500, "continents not found"));
  }
};

const getContinent = async (req, res, next) => {
  try {
    const { id } = req.params;
    const continentDB = await Continent.findById(id);
    if (!continentDB) {
      return next(setError(400, "continent not found"));
    }
    return res.status(200).json(continentDB);
  } catch (error) {
    return next(setError(500, "continent not found"));
  }
};

module.exports = {
  getAllContinents,
  getContinent,
};
