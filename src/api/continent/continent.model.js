const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const continentSchema = new Schema(
  {
    id: { type: "Number", required: true },
    name: { type: "String" },
    img: { type: "String", trim: true },
    area: {type:String},
    population: {type:String},
    density:{type:String},
    subdivisions:{type:String},
    timeZone:{type:String}
  },
  { timestamps: true }
);

const Continent = mongoose.model("continent", continentSchema);
module.exports = Continent;
