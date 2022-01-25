const Country = require("./country.models");
const { setError } = require("../../utils/errors/error");

const getAllCountries = async (req, res, next) => {
  try {
    const countryDB = await Country.find();
    return res.status(200).json(countryDB);
  } catch (error) {
    return next(setError(500, "countries not found"));
  }
};

const getCountry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const countryDB = await Country.findById(id);
    if (!countryDB) {
      return next(setError(400, "country not found"));
    }
    return res.status(200).json(countryDB);
  } catch (error) {
    return next(setError(500, "country not found"));
  }
};

module.exports = {
  getAllCountries,
  getCountry,
};
