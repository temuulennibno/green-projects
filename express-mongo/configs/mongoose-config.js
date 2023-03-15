import mongoose from "mongoose";

const MONGO_CONNECTION_STRING =
  "mongodb+srv://temuulenpinco:Ng0gp06Ttv9PYhir@cluster0.nc15xly.mongodb.net/green";

await mongoose
  .connect(MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Could not connect to MongoDB", err);
  });

export default mongoose.connection;
