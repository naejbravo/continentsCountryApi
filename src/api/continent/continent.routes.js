const ContinentRoutes = require("express").Router();

const { getContinent, getAllContinents } = require("./continent.controller");

ContinentRoutes.get("/:id", getContinent);
ContinentRoutes.get("/", getAllContinents);

module.exports = ContinentRoutes;
