import mongoose from "mongoose";
import { transformToJSON } from "../../common/helper";

export const DOCUMENT_NAME = "Logger";
export const COLLECTION_NAME = "loggers";

const schema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
schema.set("toJSON", { virtuals: true, transform: transformToJSON });

const LoggerModel = mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME);

export default LoggerModel;
