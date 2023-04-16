// a simple connection to mongoDB using Mongoose
import { connect } from "mongoose";
require("dotenv").config();
// connection to local mongoDB
const uri = process.env.TOKEN_SECRET;
const dbName = "/TheCodeRoom";
export const connectToDB = async () => {
  try {
    await connect(`${uri}${dbName}`);
    console.log("db connected");
  } catch (err) {
    console.log("error connecting to db", err);
  }
};
