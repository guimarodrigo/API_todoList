const tarefaService = require('../services/tarefaService');

exports.post = async (req, res, next) => {
  try {
    const tarefa = await tarefaService.createTarefa(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    console.error(error)
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};
