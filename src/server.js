import express from "express";
import bd from "./infra/sqlite-db.js";
const app = express();

app.use(express.json());



app.listen(3000);