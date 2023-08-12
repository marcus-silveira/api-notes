require("express-async-errors");
require("dotenv")

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");
const { UPLOADS_FOLDER } = require("./configs/upload");
migrationsRun();

const swaggerDocs = require("../swagger.json")
const swaggerUi = require("swagger-ui-express")

const app = express();

app.use(express.json());

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use("/files", express.static(UPLOADS_FOLDER));
app.use(routes);

app.use((error, req, res, next) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: "error",
      message: error.message,
    });
  }
  console.error(error);
  return res.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
});
const PORT = process.env.SERVER_PORT || 8000
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
