import prisma from '../prisma/cliente.js';  // Importação correta para ESModules

export const getAllTarefas = async () => {
  return await prisma.tarefa.findMany({
    include: {
      Usuario: true,
      Ctg: true
    }
  });
};

export const createTarefa = async (data) => {
  return await prisma.tarefa.create({ data });
};

export const updateTarefa = async (id, data) => {
  return await prisma.tarefa.update({
    where: { id },
    data
  });
};

export const deleteTarefa = async (id) => {
  return await prisma.tarefa.delete({
    where: { id }
  });
};
