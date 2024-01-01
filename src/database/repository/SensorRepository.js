import SensorModel from "../model/Sensor";

export default class SensorRepository {
  static getAll() {
    return SensorModel.find();
  }

  static getById(sensorId) {
    return SensorModel.findById(sensorId);
  }

  static create(data) {
    return SensorModel.create(data);
  }

  static update(sensorId, data) {
    return SensorModel.findByIdAndUpdate(sensorId, data, { new: true });
  }

  static delete(sensorId) {
    return SensorModel.findByIdAndDelete(sensorId);
  }
}
