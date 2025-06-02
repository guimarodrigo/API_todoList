const prisma = require("../prisma/cliente.js");
const tarefaModel = require("../models/tarefaModel.js");

const getAllTarefas = async () => {
  return await prisma.tarefa.findMany({
    include: {
      usuario: true,
      ctg: true,
    },
  });
};

const createTarefa = async (data) => {
  return await tarefaModel.create(data);
};

const updateTarefa = async (id, data) => {
  return await prisma.tarefa.update({
    where: { id },
    data,
  });
};

const deleteTarefa = async (id) => {
  return await prisma.tarefa.delete({
    where: { id },
  });
};
module.exports = {
  getAllTarefas,
  createTarefa,
  updateTarefa,
  deleteTarefa,
};
