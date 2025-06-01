const prisma = require("../prisma/cliente.js");
function findAll() {
  return prisma.categoria.findMany();
}
function create(data) {
  return prisma.categoria.create({ data });
}
function update(id, data) {
  return prisma.categoria.update({
    where: { id: Number(id) },
    data,
  });
}
function remove(id) {
  return prisma.categoria.delete({
    where: { id: Number(id) },
  });
}
module.exports = {
  findAll,
  create,
  update,
  remove,
};
