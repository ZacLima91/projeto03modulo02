import express from "express";
import {
  getIndex,
  getDetalhes,
  getCadastro,
  getCriar,
  getDeletar,
  getEditar,
  postEditar
} from "../controller/Controlador.js";

export const routers = express.Router();

routers.get("/", getIndex);

routers.get("/detalhes/:id", getDetalhes);

routers.get("/cadastro.ejs", getCadastro);

routers.post("/add", getCriar);

routers.get('/deletar/:id', getDeletar);

routers.get('/editar/:id', getEditar);

routers.post('/editar/:id', postEditar);

// routers.get("/getById/:id/:method", getById);
