const categoriaService = require("../services/categoriaService");

exports.get = async (req, res, next) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    console.error("Erro ao buscar categorias:", error);
    res.status(500).json({ error: "Erro ao buscar categorias" });
  }
};

exports.post = async (req, res, next) => {
  try {
    const categoria = await categoriaService.createCategoria(req.body);
    res.status(201).json(categoria);
  } catch (error) {
    console.error("Erro ao criar categoria:", error);
    res.status(500).json({ error: "Erro ao criar categoria" });
  }
};

exports.put = async (req, res, next) => {
  try {
    const categoriaAtualizada = await categoriaService.updateCategoria(
      req.params.id,
      req.body
    );
    res.status(200).json(categoriaAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar categoria:", error);
    res.status(500).json({ error: "Erro ao atualizar categoria" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await categoriaService.deleteCategoria(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar categoria:", error);
    res.status(500).json({ error: "Erro ao deletar categoria" });
  }
};
