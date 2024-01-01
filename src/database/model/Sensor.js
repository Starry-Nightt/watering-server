import mongoose from "mongoose";
import { transformToJSON } from "../../common/helper";

export const DOCUMENT_NAME = "Sensor";
export const COLLECTION_NAME = "sensors";

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: [true, "Vui lòng nhập tên cảm biến"],
    },
    value: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      required: [true, "Vui lòng nhập tên đơn vị đo lường"],
    },
    triggerAt: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);
schema.set("toJSON", { virtuals: true, transform: transformToJSON });

const SensorModel = mongoose.model(DOCUMENT_NAME, schema, COLLECTION_NAME);

export default SensorModel;
