import express, { response } from "express";
import { fileURLToPath } from "node:url";

const app = express();
const PORTA = Number(process.env.PORT || 3000);

// Permite que o SimuladorRequest.html seja aberto fora deste projeto.
app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS",
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization",
  );

  if (request.method === "OPTIONS") {
    return response.sendStatus(204);
  }

  next();
});

const filmes = [
    {
        "id" : 1,
        "titulo" : "O Poderoso Chefão",
        "ano" : 1972,
        "genero" : "Crime, Drama"
    },{

        "id" : 2,
        "titulo" : "Carros 2",
        "ano" : 1780,
        "genero" : "Crime, Drama"
    }
    ,
    {

        "id" : 3,
        "titulo" : "zootopia 2",
        "ano" : 8982,
        "genero" : "comedia"
    }

]


app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).send("API de filmes no ar");
});


app.get("/filmes", (request, response) => {
    response.status(200).json(filmes)
})

app.get("/filmes/:id", (request, response) => {
  const id = Number(request.params.id);

  if (isNaN(id)) {
    return response.status(400).json({ mensagem: "id deve ser um numero" });
  }

  const filme = filmes.find((filme) => filme.id === id);

  if (!filme) {
    return response.status(404).json({ mensagem: "Filme não encontrado" });
  }

  return response.status(200).json(filme);
})

app.post("/filmes", (request, response) => {
    const {titulo, ano, genero} = request.body
})




if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORTA, () => {
    console.log(`API disponível em http://localhost:${PORTA}`);
  });
}app.use((request, response) => {
    return response.status(404).json({message: "rota nao encontrada"})
})

export default app;