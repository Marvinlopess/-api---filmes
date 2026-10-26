import {
  listar,
  buscarPorId,
  adicionar,
  proximoId
} from "../repositories/filmesRepository.js";

function listarFilmes() {
  return listar();
}

function buscarFilme(id) {
  return buscarPorId(id);
}

function criarFilme(dados) {
  const { titulo, ano, genero } = dados;

  if (!titulo || titulo.trim() === "") {
    return { erro: "Título é obrigatório" };
  }

  if (!ano || ano > new Date().getFullYear()) {
    return { erro: "Ano inválido" };
  }

  const filme = {
    id: proximoId(),
    titulo: titulo,
    ano: ano,
    genero: genero
  };

  return adicionar(filme);
}

export { listarFilmes, buscarFilme, criarFilme };
