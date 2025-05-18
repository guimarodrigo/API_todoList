import prisma from '../prisma/cliente.js';  // Importação do Prisma para interagir com o banco de dados

// Função para buscar todas as tarefas
export function findAll() {
  return prisma.tarefa.findMany({
    include: {
      Usuario: true,  // Relacionamento com a tabela de Usuários
      Ctg: true       // Relacionamento com a tabela de Categoria
    }
  });
}

// Função para criar uma nova tarefa
export function create(data) {
  return prisma.tarefa.create({ data });
}

// Função para atualizar uma tarefa por ID
export function update(id, data) {
  return prisma.tarefa.update({
    where: { id },
    data
  });
}

// Função para deletar uma tarefa por ID
export function remove(id) {
  return prisma.tarefa.delete({
    where: { id }
  });
}
