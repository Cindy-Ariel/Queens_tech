import * as dotenv from 'dotenv';
import express from "express";
import clienteController from "./controllers/cliente-controllers.js";
import vendasController from "./controllers/vendas-controllers.js";
import bd from "./infra/sqlite-db.js";
import cors from "cors"
const app = express();

app.use(express.json());

dotenv.config()

const corsConfig = {
    origin: "*",
  }
  
  app.use(cors(corsConfig));
  
clienteController(app,bd);
vendasController(app,bd)

const port = process.env.PORT || 3000

app.listen(port);

//push heroku main