const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const continentSchema = new Schema(
  {
    id: { type: "Number", required: true },
    name: { type: "String" },
    img: { type: "String", trim: true },
  },
  { timestamps: true }
);

const Continent = mongoose.model("continent", continentSchema);
module.exports = Continent;
