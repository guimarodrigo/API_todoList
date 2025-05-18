import prisma from '../prisma/cliente.js';  // Importação de cliente.js para usar o Prisma

// Função para buscar todas as categorias
export function findAll() {
  return prisma.categoria.findMany();
}

// Função para criar uma nova categoria
export function create(data) {
  return prisma.categoria.create({ data });
}

// Função para atualizar uma categoria por ID
export function update(id, data) {
  return prisma.categoria.update({
    where: { id: Number(id) },
    data
  });
}

// Função para deletar uma categoria por ID
export function remove(id) {
  return prisma.categoria.delete({
    where: { id: Number(id) }
  });
}
