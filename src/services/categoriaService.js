const prisma = require("../prisma/cliente.js");

const getAllCategorias = async () => {
  return await prisma.categoria.findMany();
};

const createCategoria = async (data) => {
  return await prisma.categoria.create({ data });
};

const updateCategoria = async (id, data) => {
  return await prisma.categoria.update({
    where: { id: Number(id) },
    data,
  });
};

const deleteCategoria = async (id) => {
  return await prisma.categoria.delete({
    where: { id: Number(id) },
  });
};
module.exports = {
  getAllCategorias,
  createCategoria,
  updateCategoria,
  deleteCategoria,
};
