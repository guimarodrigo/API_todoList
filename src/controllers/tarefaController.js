const tarefaService = require("../services/tarefaService");

exports.get = async (req, res, next) => {
  try {
    const tarefas = await tarefaService.getAllTarefas();
    res.status(200).json(tarefas);
  } catch (error) {
    console.error("Erro ao buscar tarefas:", error);
    res.status(500).json({ error: "Erro ao buscar tarefas" });
  }
};

exports.post = async (req, res, next) => {
  try {
    const tarefa = await tarefaService.createTarefa(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    console.error(error);
    console.error("Erro ao criar tarefa:", error);
    res.status(500).json({ error: "Erro ao criar tarefa" });
  }
};

exports.put = async (req, res, next) => {
  try {
    const tarefaAtualizada = await tarefaService.updateTarefa(
      req.params.id,
      req.body
    );
    res.status(200).json(tarefaAtualizada);
  } catch (error) {
    console.error("Erro ao atualizar tarefa:", error);
    res.status(500).json({ error: "Erro ao atualizar tarefa" });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await tarefaService.deleteTarefa(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error("Erro ao deletar tarefa:", error);
    res.status(500).json({ error: "Erro ao deletar tarefa" });
  }
};
