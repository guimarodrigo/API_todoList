const prisma = require('../prisma/cliente');

module.exports = {
  async getAllCategorias() {
    return await prisma.categoria.findMany();
  },

  async createCategoria(data) {
    return await prisma.categoria.create({ data });
  },

  async updateCategoria(id, data) {
    return await prisma.categoria.update({
      where: { id: Number(id) },
      data,
    });
  },

  async deleteCategoria(id) {
    return await prisma.categoria.delete({
      where: { id: Number(id) },
    });
  }
};
