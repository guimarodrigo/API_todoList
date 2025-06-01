const userService = require("../services/userService");

exports.post = async (req, res, next) => {
  try {
    const user = await userService.login(req.body);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro eterno" });
  }
};
