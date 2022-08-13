
import ClienteModel from "../model/cliente-model.js";

import ClienteDAO from "../dao/cliente-DAO.js";


//import { validAll as validacoesServices } from "../services/validacao.js";

const clienteController = (app, bd) => {
  const clienteDAO = new ClienteDAO(bd);

  app.get("/cliente", async (req, res) => {
    try {
      res.json(await clienteDAO.listaClientes());
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true,
      });
    }
  });

  app.get("/cliente/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const client = await clienteDAO.pegaUmClientePorID(id);
      res.status(201).json(client);
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        error: true,
      });
    }
  });

  app.get("/cliente/email/:email", async (req, res) => {
    const email = req.params.email;
    try {
      const client = await clienteDAO.pegaUmClienteporEmail(email);
      res.status(201).json(client);
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        error: true,
      });
    }
  });

 

  app.post("/cliente", async (req, res) => {
    const body = req.body;
    try {
        const novoCliente = new ClienteModel(
            body.CPF,
            body.NOME,
            body.EMAIL,
            body.TELEFONE,
            body.RUA,
            body.NUMERO,
            body.BAIRRO,
            body.CIDADE,
            body.UF,
            body.CEP,
            body.SENHA
        );
        console.log(novoCliente)
        res.status(201).json(await clienteDAO.insereCliente(novoCliente));
      } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true,
      });
    }
  });

  app.delete("/cliente/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const delUsuario = await clienteDAO.deletaCliente(id);
      res.status(201).json(delUsuario);
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true,
      });
    }
  });

  app.put("/cliente/id/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const clienteAtualizado = new ClienteModel(
            body.CPF,
            body.NOME,
            body.EMAIL,
            body.TELEFONE,
            body.RUA,
            body.NUMERO,
            body.BAIRRO,
            body.CIDADE,
            body.UF,
            body.CEP,
            body.SENHA
        );
        const attCliente = await clienteDAO.atualizaCliente(
          id,
          clienteAtualizado
        );
        res.status(200).json(attCliente);
      
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true,
      });
    }
  });
};

export default clienteController;
