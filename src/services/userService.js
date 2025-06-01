const userModel = require("../models/userModel.js");
const prisma = require("../prisma/cliente.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAllUsers = async () => {
  try {
    const users = await userModel.findAll();
    return users;
  } catch (error) {
    throw new Error("Erro ao buscar usuários");
  }
};

const createUser = async (data) => {
  try {
    const senhaCript = await bcrypt.hash(data.senha, 10);
    const user = await userModel.create({
      nome: data.nome,
      email: data.email,
      senha: senhaCript,
    });
    return user;
  } catch (error) {
    throw new Error("Erro ao criar usuário");
  }
};
const login = async (data) => {
  try {
    const usuarioExist = await userModel.findByEmail(data.email);
    if (!usuarioExist) {
      throw new Error("Credenciais não coincidem");
    }
    const senhaValida = await bcrypt.compare(data.senha, usuarioExist.senha);
    if (!senhaValida) {
      throw new Error("Credenciais não coincidem");
    }
    const token = jwt.sign(
      {
        id: usuarioExist.id,
      },
      process.env.SENHA_JWT,
      { expiresIn: "1h" }
    );
    return token;
  } catch (error) {
    throw new Error("Credenciais não coincidem");
  }
};

const updateUser = async (id, data) => {
  try {
    const updatedUser = await userModel.update(id, data);
    return updatedUser;
  } catch (error) {
    throw new Error("Erro ao atualizar usuário");
  }
};

const deleteUser = async (id) => {
  try {
    await userModel.remove(id);
  } catch (error) {
    throw new Error("Erro ao deletar usuário");
  }
};
module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  login,
};
