const { Router } = require("express");
const UserController = require("../controller/UserController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const multer = require("multer")
const uploadConfig = require("../configs/upload");
const UserAvatarController = require("../controller/UserAvatarController");

const upload = multer(uploadConfig.MULTER)
const usersRoutes = Router();

const userController = new UserController();
const userAvatarController = new UserAvatarController

usersRoutes.post("/", userController.create);
usersRoutes.put("/",ensureAuthenticated, userController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), userAvatarController.update)
module.exports = usersRoutes;
