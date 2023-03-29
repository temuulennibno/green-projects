import restaurantModel from "../models/restrauntModel.js";

export const createRestaurant = async ({ name, location }) => {
  const response = await restaurantModel.create({ name, location });
  return response;
};

export const findAllRestaurants = async () => {
  return await restaurantModel.find({});
};

export const findNearest = async (location) => {
  const response = await restaurantModel.findOne({
    location: {
      $near: {
        $geometry: {
          type: "Point",
          coordinates: location,
        },
        $maxDistance: 1000, //Бид зайгаар бас хязгаарлаж болно
      },
    },
  });
  return response;
};
