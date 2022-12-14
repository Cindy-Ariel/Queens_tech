
import ProdutoModel from "../model/produto-model.js";

import ProdutoDAO from "../dao/produto-dao.js";
import  { validaEntradaProduto, verificaSeExisteObjeto,verificaCampoVazio }  from "../services/validacoes.js"


const produtoController = (app, bd) => {
    const produtoDAO = new ProdutoDAO(bd);

    app.get("/produto", async (req, res) => {
        try {
            res.json(await produtoDAO.listaProdutos());
        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });

    app.get("/produto/codigo/:codigo", async (req, res) => {
        const codigo = req.params.codigo;
        try {
            const produto = await produtoDAO.pegaProdutoPorCodigo(codigo)
            await verificaSeExisteObjeto(produto, `Produto de código '${codigo}' não existe`)
            res.status(200).json(produto);
        } catch (error) {
            res.status(404).json({
                msg: error.message
            });
        }
    });

    app.get("/produto/categoria/:categoria", async (req, res) => {
        const categoria = req.params.categoria;
        try {
            const product = await produtoDAO.pegaProdutoPorCategoria(categoria);
            await verificaSeExisteObjeto(product, `Categoria '${categoria}' não existe`)
            res.status(200).json(product);
        } catch (error) {
            res.status(404).json({
                msg: error.message
            });
        }
    });



    app.post("/produto", async (req, res) => {
        const body = req.body;
        try {
            const novoProduto = new ProdutoModel(
                body.NOME,
                body.CATEGORIA,
                body.MARCA,
                body.COR,
                body.VALOR,
                body.DESCRICAO,
                body.FORNECEDOR_ID,
            );
            await validaEntradaProduto(novoProduto);
            res.status(201).json(await produtoDAO.insereProduto(novoProduto));
        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });

    app.delete("/produto/codigo/:codigo", async (req, res) => {
        const codigo = req.params.codigo;
        try {
            const produto = await produtoDAO.pegaProdutoPorCodigo(codigo)
            const delUsuario = await produtoDAO.deletaProduto(codigo);
            await verificaSeExisteObjeto(produto, `Produto de código '${codigo}' não existe`);
            res.status(201).json(delUsuario);
        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });

    app.put("/produto/codigo/:codigo", async (req, res) => {
        const codigo = req.params.codigo;
        const body = req.body;

        try {
            const ProdutoAtualizado = new ProdutoModel(
                body.NOME,
                body.CATEGORIA,
                body.MARCA,
                body.COR,
                body.VALOR,
                body.DESCRICAO,
                body.FORNECEDOR_ID,
            );
            const produto = await produtoDAO.pegaProdutoPorCodigo(codigo)
            const attProduto = await produtoDAO.atualizaProduto(codigo,ProdutoAtualizado);
            await verificaSeExisteObjeto(produto, `Produto de codigo '${codigo}' não existe`)
                verificaCampoVazio(ProdutoAtualizado);
            res.status(200).json(attProduto);

        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });
};

export default produtoController; 