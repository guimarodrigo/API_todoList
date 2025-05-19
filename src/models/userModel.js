const prisma = require('../prisma/cliente.js'); // Importação do Prisma para interagir com a base de dados

// Função para buscar todos os usuários
function findAll() {
  return prisma.user.findMany();
}

// Função para criar um novo usuário
function create(data) {
  return prisma.user.create({ data });
}

// Função para atualizar um usuário por ID
function update(id, data) {
  return prisma.user.update({
    where: { id: Number(id) },
    data
  });
}

// Função para deletar um usuário por ID
function remove(id) {
  return prisma.user.delete({
    where: { id: Number(id) }
  });
}

// Exportando todas as funções
module.exports = {
  findAll,
  create,
  update,
  remove
};
