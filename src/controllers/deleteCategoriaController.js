const categoriaService = require('../services/categoriaService');

exports.delete = async (req, res, next) => {
  try {
    await categoriaService.deleteCategoria(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar categoria:', error);
    res.status(500).json({ error: 'Erro ao deletar categoria' });
  }
};
