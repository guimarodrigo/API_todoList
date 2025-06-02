const prisma = require("../prisma/cliente.js");
function findAll() {
  return prisma.tarefa.findMany({
    include: {
      Usuario: true,
      Ctg: true,
    },
  });
}
function create(data) {
  return prisma.tarefa.create({data});
}
function update(id, data) {
  return prisma.tarefa.update({
    where: { id },
    data,
  });
}
function remove(id) {
  return prisma.tarefa.delete({
    where: { id },
  });
}
module.exports = {
  findAll,
  create,
  update,
  remove,
};
