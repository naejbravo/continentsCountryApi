const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const countrySchema = new Schema(
  {
    id: { type: "Number", required: true },
    name: { type: "String", trim: true },
    alias: { type: "String", trim: true },
    img: { type: "String", trim: true },
    population: {type:"String", trim:true},
    president: {type:"String", trim:true},
    currency: {type:"String", trim:true},
    continent: {type:"String", trim:true},

  },
  { timestamps: true }
);

const Country = mongoose.model("country", countrySchema);
module.exports = Country;
