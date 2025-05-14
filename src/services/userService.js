const prisma = require('../prisma/cliente.js');

module.exports = {
  async getAllUsers() {
    return await prisma.user.findMany();
  },

  async createUser(data) {
    return await prisma.user.create({ data});
  },

  async updateUser(id, data) {
    return await prisma.user.update({
      where: { id: Number(id) },
      data,
    });
  },

  async deleteUser(id) {
    return await prisma.user.delete({
      where: { id: Number(id) },
    });
  }
};
