const prisma = require('../prisma/cliente');

module.exports = {
  async getAllTarefas() {
    return await prisma.tarefa.findMany({
      include: {
        Usuario: true,
        Ctg: true
      }
    });
  },

  async createTarefa(data) {
    return await prisma.tarefa.create({ data });
  },

  async updateTarefa(id, data) {
    return await prisma.tarefa.update({
      where: { id },
      data
    });
  },

  async deleteTarefa(id) {
    return await prisma.tarefa.delete({
      where: { id }
    });
  }
};
