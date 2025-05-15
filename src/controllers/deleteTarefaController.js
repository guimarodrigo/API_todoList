const tarefaService = require('../services/tarefaService');

exports.delete = async (req, res, next) => {
  try {
    await tarefaService.deleteTarefa(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};
