import prisma from '../prisma/cliente.js';  // Importação do Prisma para interagir com a base de dados

// Função para buscar todos os usuários
export function findAll() {
  return prisma.user.findMany();
}

// Função para criar um novo usuário
export function create(data) {
  return prisma.user.create({ data });
}

// Função para atualizar um usuário por ID
export function update(id, data) {
  return prisma.user.update({
    where: { id: Number(id) },
    data
  });
}

// Função para deletar um usuário por ID
export function remove(id) {
  return prisma.user.delete({
    where: { id: Number(id) }
  });
}
