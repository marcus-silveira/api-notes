require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const express = require("express");
const routes = require("./routes");
migrationsRun();

const app = express();

app.use(express.json());
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
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));