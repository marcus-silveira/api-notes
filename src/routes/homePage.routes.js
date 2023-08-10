const { Router } = require("express");
const HomePageController = require("../controller/HomePageController");

const homePageRoutes = Router();
const homePageController = new HomePageController();

homePageRoutes.get("/", homePageController.display);

module.exports = homePageRoutes;
