import express from "express";
import { fileURLToPath } from "node:url";
import { listar, buscar, criar } from "./controllers/filmesController.js";

const app = express();
const PORTA = Number(process.env.PORT || 3000);

app.use((request, response, next) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (request.method === "OPTIONS") {
    return response.sendStatus(204);
  }

  next();
});

app.use(express.json());

app.get("/", (request, response) => {
  return response.status(200).send("API de filmes no ar");
});

app.get("/filmes", listar);
app.get("/filmes/:id", buscar);
app.post("/filmes", criar);

app.use((request, response) => {
  return response.status(404).json({ message: "rota nao encontrada" });
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORTA, () => {
    console.log(`API disponível em http://localhost:${PORTA}` );
  });
}

export default app;
