const prisma = require('../prisma/cliente.js'); // Importação de cliente.js para usar o Prisma

// Função para buscar todas as categorias
function findAll() {
  return prisma.categoria.findMany();
}

// Função para criar uma nova categoria
function create(data) {
  return prisma.categoria.create({ data });
}

// Função para atualizar uma categoria por ID
function update(id, data) {
  return prisma.categoria.update({
    where: { id: Number(id) },
    data
  });
}

// Função para deletar uma categoria por ID
function remove(id) {
  return prisma.categoria.delete({
    where: { id: Number(id) }
  });
}

// Exportando todas as funções em CommonJS
module.exports = {
  findAll,
  create,
  update,
  remove
};
