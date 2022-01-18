const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RedesocialSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    yearsonfundation: { type: String, trim: true },
    on_air: { type: Boolean, trim: true },
    creator: [{ type: Schema.Types.ObjectId, ref: "fundadores", required: false }],
    img: { type: String, trim: true },
  },
  { timestamp: true, collection: "redesociales" }
);

const Redesocial = mongoose.model("redesociales", RedesocialSchema);
module.exports = Redesocial;