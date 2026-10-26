const filmes = [
  { id: 1, titulo: "O Poderoso Chefão", ano: 1972, genero: "Crime, Drama" },
  { id: 2, titulo: "Carros 2", ano: 2004, genero: "Animação" },
  { id: 3, titulo: "Zootopia", ano: 2016, genero: "Animação" }
];

function listar() {
  return filmes;
}

function buscarPorId(id) {
  return filmes.find((filme) => filme.id === id);
}

function adicionar(filme) {
  filmes.push(filme);
  return filme;
}

function proximoId() {
  return filmes.length + 1;
}

export { listar, buscarPorId, adicionar, proximoId };
