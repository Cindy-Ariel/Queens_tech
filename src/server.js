import express from "express";
import clienteController from "./controllers/cliente-controllers.js";
import bd from "./infra/sqlite-db.js";
const app = express();

app.use(express.json());

clienteController(app,bd)


app.listen(3000);