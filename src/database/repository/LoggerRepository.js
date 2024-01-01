import LoggerModel from "../model/Logger";
import moment from "moment";

export default class LoggerRepository {
  static getAll() {
    return LoggerModel.find().sort({ createdAt: -1 });
  }

  static getByDate(dateString) {
    const startOfDay = moment(dateString, "DD-MM-YYYY").startOf("day");
    const endOfDay = moment(dateString, "DD-MM-YYYY").endOf("day");
    return LoggerModel.find({
      createdAt: {
        $gte: startOfDay,
        $lt: endOfDay,
      },
    });
  }

  static create(data) {
    return LoggerModel.create(data);
  }

  static delete(loggerId) {
    return LoggerModel.findByIdAndDelete(loggerId);
  }
}
