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
    }
]


app.use(express.json());

app.get("/filmes", (request, response) => {
    response.status(200).json(filmes) 
})
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORTA, () => {
    console.log(`API disponível em http://localhost:${PORTA}`);
  });
}

export default app;