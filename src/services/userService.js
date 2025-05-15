const prisma = require('../prisma/cliente.js');

module.exports = {
  async getAllUsers() {
    return await prisma.user.findMany();
  },

  async createUser(data) {
    return await prisma.user.create({ data});
  },
  // A função prisma.user.create({ data }) espera um objeto chamado data que 
  // contenha todas as propriedades do modelo do banco de dados — como nome, email, senha.
  // Você não precisa (e nem deve) passar nome, email, senha separadamente como parâmetros 
  // da função, porque o Prisma já espera um objeto data com esses campos.

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
