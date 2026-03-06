import mongoose from "mongoose";

const connectToDatabase = async () => {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is not defined. Please add it to your .env.local file.");
  }

  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Database connection has already been established.");
    return;
  }

  if (connectionState === 2) {
    console.log("Establishing database connection...");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "portfolio",
      bufferCommands: true,
    });
    console.log("Database connection established successfully.");
  } catch (err: any) {
    console.log("Error: Connection to database failed");
    throw new Error(err);
  }
};

export default connectToDatabase;
