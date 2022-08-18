import express from "express";
import clienteController from "./controllers/cliente-controllers.js";
import ProdutoController from "./controllers/produto-controller.js"
import FornecedorController from "./controllers/fornecedor-controller.js";
import vendasController from "./controllers/vendas-controllers.js";
import EstoqueController from "./controllers/estoque-controller.js"

import bd from "./infra/sqlite-db.js";
import cors from "cors"
const app = express();

app.use(express.json());

const corsConfig = {
    origin: "*",
}

app.use(cors(corsConfig));

clienteController(app,bd);
ProdutoController(app,bd);
FornecedorController(app,bd);
vendasController(app,bd);
EstoqueController(app,bd);

const port = process.env.PORT || 3000;

app.listen(port);
