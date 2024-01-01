import express from "express";
import LoggerRepository from "../database/repository/LoggerRepository";
import { getErrorRequest, getSuccessRequest } from "../common/helper";

const loggerRoutes = express.Router();

loggerRoutes.get("/", async (req, res) => {
  try {
    const loggers = await LoggerRepository.getAll();
    return res.status(200).json(getSuccessRequest(loggers));
  } catch (err) {
    console.log(err);
    return res.status(400).json(getErrorRequest(err));
  }
});

loggerRoutes.get("/:date", async (req, res) => {
  try {
    const dateString = req.params?.date;
    const loggers = await LoggerRepository.getByDate(dateString);
    return res.status(200).json(getSuccessRequest(loggers));
  } catch (err) {
    console.log(err);
    return res.status(400).json(getErrorRequest(err));
  }
});

loggerRoutes.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newLog = await LoggerRepository.create(data);
    return res.status(201).json(getSuccessRequest(newLog));
  } catch (err) {
    return res.status(400).json(getErrorRequest(err));
  }
});

loggerRoutes.delete("/:id", async (req, res) => {
  try {
    const id = req.params?.id;
    await LoggerRepository.delete(id);
    return res.status(200).json(getSuccessRequest());
  } catch (err) {
    return res.status(400).json(getErrorRequest(err));
  }
});

export default loggerRoutes;
