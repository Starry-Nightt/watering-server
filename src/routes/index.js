import loggerRoutes from "./LoggerRoutes";
import sensorRoutes from "./SensorRoutes";

const initRoutes = (app) => {
  app.use("/logger", loggerRoutes);
  app.use("/sensor", sensorRoutes);
};

export default initRoutes;
