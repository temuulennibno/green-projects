import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
});

const restaurantModel = mongoose.model("Restaurant", restaurantSchema);

restaurantModel.collection.createIndex({ location: "2dsphere" });

export default restaurantModel;
