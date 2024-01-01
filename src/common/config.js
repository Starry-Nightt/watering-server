import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import mongoose from "mongoose";

export const configApp = (app) => {
  // Use morgan logger
  app.use(morgan("tiny"));
  // parse request to body parser
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(express.json());
};

export const connectDatabase = async () => {
  const url = process.env.MONGO_URL;
  try {
    const connect = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected: ", connect.connection.host);
  } catch (err) {
    process.exit(1);
  }
};
