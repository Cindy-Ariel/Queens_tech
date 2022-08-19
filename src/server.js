import express from "express";
import clienteController from "./controllers/cliente-controllers.js";
import produtoController from "./controllers/produto-controller.js"
import fornecedorController from "./controllers/fornecedor-controller.js";
import vendasController from "./controllers/vendas-controllers.js";
import estoqueController from "./controllers/estoque-controller.js";
import funcionarioController from "./controllers/funcionario-controllers.js";


import bd from "./infra/sqlite-db.js";
import cors from "cors"
const app = express();

app.use(express.json());

const corsConfig = {
    origin: "*",
}

app.use(cors(corsConfig));

clienteController(app,bd);
produtoController(app,bd);
fornecedorController(app,bd);
vendasController(app,bd);
estoqueController(app,bd);
funcionarioController(app,bd);

const port = process.env.PORT || 4000;

app.listen(port);
