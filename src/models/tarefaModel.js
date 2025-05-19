const prisma = require('../prisma/cliente.js'); // Importação do Prisma para interagir com o banco de dados

// Função para buscar todas as tarefas
function findAll() {
  return prisma.tarefa.findMany({
    include: {
      Usuario: true,  // Relacionamento com a tabela de Usuários
      Ctg: true       // Relacionamento com a tabela de Categoria
    }
  });
}

// Função para criar uma nova tarefa
function create(data) {
  return prisma.tarefa.create({ data });
}

// Função para atualizar uma tarefa por ID
function update(id, data) {
  return prisma.tarefa.update({
    where: { id },
    data
  });
}

// Função para deletar uma tarefa por ID
function remove(id) {
  return prisma.tarefa.delete({
    where: { id }
  });
}

// Exportando todas as funções
module.exports = {
  findAll,
  create,
  update,
  remove
};
