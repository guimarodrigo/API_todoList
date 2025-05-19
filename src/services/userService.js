const UserModel = require('../models/tarefaModel.js'); // Importa todas as funções do modelo
const prisma = require('../prisma/cliente.js'); // Importação correta para CommonJS

// Funções do serviço usando CommonJS
const getAllUsers = async () => {
  try {
    const users = await UserModel.findAll(); // Chama a função do modelo para buscar usuários
    return users;
  } catch (error) {
    throw new Error('Erro ao buscar usuários');
  }
};

const createUser = async (data) => {
  try {
    const user = await UserModel.create(data); // Cria um usuário no banco de dados
    return user;
  } catch (error) {
    throw new Error('Erro ao criar usuário');
  }
};

const updateUser = async (id, data) => {
  try {
    const updatedUser = await UserModel.update(id, data); // Atualiza um usuário no banco de dados
    return updatedUser;
  } catch (error) {
    throw new Error('Erro ao atualizar usuário');
  }
};

const deleteUser = async (id) => {
  try {
    await UserModel.remove(id); // Deleta um usuário do banco de dados
  } catch (error) {
    throw new Error('Erro ao deletar usuário');
  }
};

// Exportação no formato CommonJS
module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser
};
