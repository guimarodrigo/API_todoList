import prisma from '../prisma/cliente.js';  // Importação para ESModules

export const getAllCategorias = async () => {
  return await prisma.categoria.findMany();
};

export const createCategoria = async (data) => {
  return await prisma.categoria.create({ data });
};

export const updateCategoria = async (id, data) => {
  return await prisma.categoria.update({
    where: { id: Number(id) },
    data,
  });
};

export const deleteCategoria = async (id) => {
  return await prisma.categoria.delete({
    where: { id: Number(id) },
  });
};
