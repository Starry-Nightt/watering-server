import express from "express";
import dotenv from "dotenv";
import { configApp, connectDatabase } from "./common/config";
import initRoutes from "./routes";

dotenv.config({ path: ".env" });
const PORT = process.env.PORT || 8080;
const app = express();

function main() {
  configApp(app);
  connectDatabase();
  initRoutes(app);

  app.get("/", (req, res) => {
    return res.json("IOT server");
  });

  app.listen(PORT, () => {
    console.log(`... Server is running on http://localhost:${PORT}`);
  });
}

main();
