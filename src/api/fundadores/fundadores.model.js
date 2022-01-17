const mongoose = require("mongoose");

const fundadorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    birth_date: { type: String },
    city: { type: String, trim: true },
    img: { type: String, trim: true },
  },
  {
    timestamps: true
  }
);

const Fundador = mongoose.model("fundadores", fundadorSchema);
module.exports = Fundador;
