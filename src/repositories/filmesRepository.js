import fs from "node:fs";

const caminho = new URL("../../data/filmes.json", import.meta.url);

function lerFilmes() {
  const dados = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(dados);
}

function listar() {
  return lerFilmes();
}

function buscarPorId(id) {
  const filmes = lerFilmes();
  return filmes.find((filme) => filme.id === id);
}

function adicionar(filme) {
  const filmes = lerFilmes();
  filmes.push(filme);

  fs.writeFileSync(caminho, JSON.stringify(filmes, null, 2));

  return filme;
}

function proximoId() {
  const filmes = lerFilmes();

  if (filmes.length === 0) {
    return 1;
  }

  return Math.max(...filmes.map((filme) => filme.id)) + 1;
}

export { listar, buscarPorId, adicionar, proximoId };
