import express from "express";
import SensorRepository from "../database/repository/SensorRepository";
import { getBadRequest, getSuccessRequest } from "../common/helper";

const sensorRoutes = express.Router();

sensorRoutes.get("/", async (req, res) => {
  try {
    const sensors = await SensorRepository.getAll();
    return res.status(200).json(getSuccessRequest(sensors));
  } catch (error) {
    return res.status(400).json(getBadRequest(error));
  }
});

sensorRoutes.get("/:id", async (req, res) => {
  try {
    const id = req.params?.id;
    const sensor = await SensorRepository.getById(id);
    return res.status(200).json(getSuccessRequest(sensor));
  } catch (error) {
    return res.status(400).json(getBadRequest(error));
  }
});

sensorRoutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newSensor = await SensorRepository.create(data);
    return res.status(201).json(getSuccessRequest(newSensor));
  } catch (error) {
    return res.status(400).json(getBadRequest(error));
  }
});

sensorRoutes.put("/:id", async (req, res) => {
  try {
    const id = req.params?.id;
    const data = req.body;
    const updatedSensor = await SensorRepository.update(id, data);
    return res.status(201).json(getSuccessRequest(updatedSensor));
  } catch (error) {
    return res.status(400).json(getBadRequest(error));
  }
});

sensorRoutes.delete("/:id", async (req, res) => {
  try {
    const id = req.params?.id;
    await SensorRepository.delete(id);
    return res.status(200).json(getSuccessRequest());
  } catch (error) {
    return res.status(400).json(getBadRequest(error));
  }
});

export default sensorRoutes;
