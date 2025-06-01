const userService = require("../services/userService");

exports.get = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar usuários" });
  }
};

exports.post = async (req, res, next) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro ao criar usuário" });
  }
};
exports.put = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar usuário" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar usuário" });
  }
};
