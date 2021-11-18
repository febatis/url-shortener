import { config } from "./config/Constants";
import { URLController } from "./controller/URLController";
import express, { Request, Response } from "express";
import { MongoConnection } from "./database/MongoConnection";

// Config da aplicação
const api = express();
api.use(express.json());

// Database
const database = new MongoConnection()
database.connect()

// Config de rotas
const urlController = new URLController()
api.post("/shorten", urlController.shorten)
api.get('/:hash', urlController.redirect)

// Config do servidor
api.listen(5000, () => console.log(`Servidor rodando em ${config.API_URL}`));
