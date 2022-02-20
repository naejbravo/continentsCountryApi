const express = require("express");
const cors = require("cors");
const { setError } = require("./src/utils/errors/error");
const ContinentRoutes = require("./src/api/continent/continent.routes");
const CountryRoutes = require("./src/api/country/country.routes");

const { connectDb } = require("./src/utils/database/db");

const PORT = process.env.PORT || 8080;

const app = express();
connectDb();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use(
  cors({
    origin: [
      "https://angular-continent-countries.vercel.app"
      // "https://angular-continent-countries.vercel.app", "http://localhost:4200"
    ],
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "5mb",
  })
);

app.use(express.urlencoded({ limit: "5mb", extended: true }));
app.use("/api/countries", CountryRoutes);
app.use("/api/continents", ContinentRoutes);

app.use("/", (req, res, next) => {
  return res.json({
    country: {
      endpoints: ["/api/countries", "/api/countries/:id"],
    },
    continent: {
      endpoint: "/api/continents",
    },
  });
});

app.use("*", (req, res, next) => {
  return next(setError(404, "Route not found"));
});

app.use((error, req, res, next) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
