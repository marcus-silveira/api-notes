const { verify } = require("jsonwebtoken");
const AppError = require("../utils/AppError");
const { jwt } = require("../configs/auth");

const ensureAuthenticated = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new AppError("JWT Token não fornecido", 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const { sub: user_id } = verify(token, jwt.secret);
    req.user = {
      id: Number(user_id),
    };
    next();
  } catch {
    throw new AppError("JWT Token inválido", 401);
  }
};

module.exports = ensureAuthenticated;
