const CountryRoutes = require("express").Router();


const { getCountry, getAllCountries } = require("./country.controller");

CountryRoutes.get("/:id", getCountry);
CountryRoutes.get("/", getAllCountries);

module.exports = CountryRoutes;
