const prisma = require('../prisma/cliente.js'); // Importação para CommonJS

const getAllTarefas = async () => {
  return await prisma.tarefa.findMany({
    include: {
      Usuario: true,
      Ctg: true
    }
  });
};

const createTarefa = async (data) => {
  return await prisma.tarefa.create({ data });
};

const updateTarefa = async (id, data) => {
  return await prisma.tarefa.update({
    where: { id },
    data
  });
};

const deleteTarefa = async (id) => {
  return await prisma.tarefa.delete({
    where: { id }
  });
};

// Exportação no estilo CommonJS
module.exports = {
  getAllTarefas,
  createTarefa,
  updateTarefa,
  deleteTarefa
};
