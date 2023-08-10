const knex = require("../database/knex");
const AppError = require("../utils/AppError");
const DiskStorage = require("../providers/DiskStorage");

class UserAvatarController {
  async update(req, res) {
    const user_id = req.user.id;
    const avatarFileName = req.file.filename;
    const diskStorage = new DiskStorage();

    const user = await knex("users").where({ id: user_id }).first();
    if (!user) {
      throw new AppError("Usuário não autenticado!");
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar);
    }

    const fileName = await diskStorage.saveFile(avatarFileName);
    console.log(fileName)

    user.avatar = fileName;
    await knex("users").update(user).where({ id: user_id });

    res.status(200).json(user);
  }
}

module.exports = UserAvatarController;
