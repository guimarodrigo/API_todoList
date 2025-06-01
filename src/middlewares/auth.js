const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

async function verificarLogin(req, res, next) {
  const { authorization } = req.headers;
  try {
    const token = authorization.replace("Bearer ", "");
    if (!token) {
      return res.status(403).json({ message: "Acesso negado!" });
    }
    const { id } = jwt.verify(token, process.env.SENHA_JWT);
    const usuarioLogado = await userModel.findByID(id);
    if (!usuarioLogado) {
      return res.status(403).json({ message: "Acesso negado!" });
    }
    next();
  } catch {
    return res.status(403).json({ message: "Acesso negado!" });
  }
}

module.exports = {
  verificarLogin,
};
