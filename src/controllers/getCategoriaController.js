const categoriaService = require('../services/categoriaService');

exports.get = async (req, res, next) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.status(200).json(categorias);
  } catch (error) {
    console.error('Erro ao buscar categorias:', error);
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
};
