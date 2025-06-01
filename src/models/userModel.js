const prisma = require("../prisma/cliente.js");
function findAll() {
  return prisma.user.findMany({
    omit: {
      senha: true,
    },
  });
}
function create(data) {
  return prisma.user.create({ data });
}
function findByEmail(email) {
  return prisma.user.findFirst({ where: { email } });
}
function findByID(id) {
  return prisma.user.findFirst({ where: { id } });
}
function update(id, data) {
  return prisma.user.update({
    where: { id: Number(id) },
    data,
  });
}
function remove(id) {
  return prisma.user.delete({
    where: { id: Number(id) },
  });
}
module.exports = {
  findAll,
  create,
  update,
  remove,
  findByEmail,
  findByID,
};
