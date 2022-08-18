import EstoqueModel from "../model/estoque-model.js";
import EstoqueDAO from "../dao/estoque-dao.js";
import { validaEntradaEstoque, verificaSeExisteObjeto, verificaCampoVazio } from "../services/validacoes.js"

const EstoqueController = (app, bd) => {
const estoqueDAO = new EstoqueDAO(bd);


    app.get("/estoques", async (req, res) => {
        try {
            res.json(await estoqueDAO.listaEstoques());
        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });

    app.get("/estoque/codigo_produto/:codigo_produto", async (req, res) => {
        const codigo_produto = req.params.codigo_produto;
        try {
            const estoque = await estoqueDAO.pegaEstoqueporCodigo_Produto(codigo_produto);
            await verificaSeExisteObjeto(estoque, `Estoque do produto de  código '${codigo_produto}' não existe`)
            res.status(200).json(estoque);
        } catch (error) {
            res.status(404).json({
                Error: error.message
            });
        }
    });

    app.post("/estoque", async (req, res) => {
        const body = req.body;
        try {
            const novoEstoque = new EstoqueModel(
                body.CODIGO_PRODUTO,
                body.QUANT_PRODUTO,
                
            );
            await validaEntradaEstoque(novoEstoque)
            res.status(201).json(await estoqueDAO.insereEstoque(novoEstoque));
        } catch (error) {
            res.status(400).json({
                Error: error.message
            });
        }
    });

    app.delete("/estoque/codigo_produto/:codigo_produto", async (req, res) => {
        const codigo_produto = req.params.codigo_produto;
        try {
            const estoque = await estoqueDAO.pegaEstoqueporCodigo_Produto(codigo_produto);
            await verificaSeExisteObjeto(estoque, `Estoque do produto de  código '${codigo_produto}' não existe`)

            const delEstoque = await estoqueDAO.deletaEstoque(codigo_produto);

            res.status(201).json(delEstoque);
        } catch (error) {
            res.status(400).json({
                Error: error.message
            });
        }
    });

    app.put("/estoque/codigo_produto/:codigo_produto", async (req, res) => {
        const codigo_produto = req.params.codigo_produto;
        const body = req.body;

        try {
            const estoqueAtualizado = new EstoqueModel(
                body.CODIGO_PRODUTO,
                body.QUANT_PRODUTO,
                
            );
            const estoque = await estoqueDAO.pegaEstoqueporCodigo_Produto(codigo_produto);
            
            const attEstoque = await estoqueDAO.atualizaEstoque(
                codigo_produto,
                estoqueAtualizado
                );
                
                await verificaSeExisteObjeto(estoque, `Estoque do produto de  código '${codigo_produto}' não existe`)
            verificaCampoVazio(estoqueAtualizado);
            res.status(200).json(attEstoque);

        } catch (error) {
            res.status(400).json({
                Error: error.message
            });
        }
    });
};

export default EstoqueController;