const categoriaService = require('../services/categoriaService');

exports.put = async (req, res, next) => {
  try {
    const categoriaAtualizada = await categoriaService.updateCategoria(req.params.id, req.body);
    res.status(200).json(categoriaAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar categoria:', error);
    res.status(500).json({ error: 'Erro ao atualizar categoria' });
  }
};
