import {
  listarFilmes,
  buscarFilme,
  criarFilme
} from "../logic/filmesLogic.js";

function listar(request, response) {
  return response.status(200).json(listarFilmes());
}

function buscar(request, response) {
  const id = Number(request.params.id);

  if (!Number.isInteger(id) || id <= 0) {
    return response.status(400).json({ mensagem: "id deve ser um número válido" });
  }

  const filme = buscarFilme(id);

  if (!filme) {
    return response.status(404).json({ mensagem: "Filme não encontrado" });
  }

  return response.status(200).json(filme);
}

function criar(request, response) {
  const filme = criarFilme(request.body);

  if (filme.erro) {
    return response.status(400).json({ mensagem: filme.erro });
  }

  return response.status(201).json(filme);
}

export { listar, buscar, criar };
