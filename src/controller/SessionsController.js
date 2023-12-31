const { compare } = require("bcryptjs");
const knex = require("../database/knex");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");
const AppError = require("../utils/AppError");

class SessionsController {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email | !password) {
      throw new AppError("Todos os campos são o obrigatórios");
    }
    const { secret, expiresIn } = authConfig.jwt;

    const user = await knex("users").where({ email }).first();

    if (!user) {
      throw new AppError("Email e/ou senha incorretos", 401);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new AppError("Email e/ou senha incorretos", 401);
    }

    const token = sign({}, secret, {
      subject: String(user.id),
    });
    return res.status(201).json({ user, token });
  }
}

module.exports = SessionsController;
