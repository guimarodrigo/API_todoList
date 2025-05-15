const tarefaService = require('../services/tarefaService');

exports.put = async (req, res, next) => {
  try {
    const tarefaAtualizada = await tarefaService.updateTarefa(req.params.id, req.body);
    res.status(200).json(tarefaAtualizada);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};
