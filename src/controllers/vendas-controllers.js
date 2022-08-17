
import VendaModel from "../model/venda-model.js";
import VendaDAO from "../dao/vendas-dao.js";
import { verificaSeExisteObjeto } from "../services/validacoes.js";
import { verificaCampoVazio } from "../services/validacoes.js"

const vendaController = (app, bd) => {
  const vendaDAO = new VendaDAO(bd);


  app.get("/vendas", async (req, res) => {
    try {
      res.json(await vendaDAO.listaVendas());
    } catch (error) {
      res.status(400).json({
        msg: error.message
      });
    }
  });

  app.get("/venda/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const venda = await vendaDAO.pegaUmaVendaPorID(id);
      await verificaSeExisteObjeto(venda, `Não existe uma venda com o id ${id}`)
      res.status(201).json(venda)
    } catch (error) {
      res.status(404).json({
        msg: error.message
      });
    }
  });

  app.post("/venda", async (req, res) => {
    const body = req.body;
    try {
      const novaVenda = new VendaModel(
        body.ID_PRODUTO,
        body.ID_CLIENTE,
        body.DESCONTO,
        body.ID_FUNCIONARIO,
        body.QUANTIDADE,
        body.VALOR_TOTAL,
        body.DATA_VENDA,
        body.VALIDADE_GARANTIA,
      );
      verificaCampoVazio(novaVenda);
      res.status(201).json(await vendaDAO.insereVenda(novaVenda));
    } catch (error) {
      res.status(400).json({
        msg: error.message,
      });
    }
  });

  app.delete("/venda/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const venda = await vendaDAO.pegaUmaVendaPorID(id);
      await verificaSeExisteObjeto(venda, `Não existe uma venda com o id ${id}`)
      const delVenda = await vendaDAO.deletaVenda(id);
      res.status(201).json(delVenda);
    } catch (error) {
      res.status(400).json({
        msg: error.message
      });
    }
  });

  app.put("/venda/id/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
      const vendaAtualizada = new VendaModel(
        body.ID_PRODUTO,
        body.ID_CLIENTE,
        body.DESCONTO,
        body.ID_FUNCIONARIO,
        body.QUANTIDADE,
        body.VALOR_TOTAL,
        body.DATA_VENDA,
        body.VALIDADE_GARANTIA,
      );

      const venda = await vendaDAO.pegaUmaVendaPorID(id);
      await verificaSeExisteObjeto(venda, `Não existe um venda com o id ${id}`);
      const atlVenda = await vendaDAO.atualizaVenda(
        id,
        vendaAtualizada
      );
      verificaCampoVazio(vendaAtualizada);
      res.status(201).json(atlVenda);

    } catch (error) {
      res.status(400).json({
        msg: error.message
      });
    }
  });
};

export default vendaController;
