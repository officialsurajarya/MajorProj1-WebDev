const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DEFAULT_IMAGE =
  "https://r1imghtlak.mmtcdn.com/4b78346b-5af0-4971-8b6f-fbfc68e8bc5e.jpg";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default: DEFAULT_IMAGE,
    set: (v) => (v === "" ? DEFAULT_IMAGE : v),
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
