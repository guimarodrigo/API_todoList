const tarefaService = require('../services/tarefaService');

exports.get = async (req, res, next) => {
  try {
    const tarefas = await tarefaService.getAllTarefas();
    res.status(200).json(tarefas);
  } catch (error) {
    console.error('Erro ao buscar tarefas:', error);
    res.status(500).json({ error: 'Erro ao buscar tarefas' });
  }
};
