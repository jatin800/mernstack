import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mernstack_crud");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};
