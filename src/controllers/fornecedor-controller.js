
import FornecedorModel from "../model/fornecedor-model.js";
import FornecedorDAO from "../dao/fornecedor-dao.js";
import  { validaEntradaFornecedor, verificaSeExisteObjeto,verificaCampoVazio }  from "../services/validacoes.js"

const FornecedorController = (app, bd) => {
    const fornecedorDAO = new FornecedorDAO(bd);

    app.get("/fornecedor", async (req, res) => {
        try {
            res.json(await fornecedorDAO.listaFornecedores());
        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });

    app.get("/fornecedor/id/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const fornecedor = await fornecedorDAO.pegaFornecedorPorID(id)
            await verificaSeExisteObjeto(fornecedor, `Fornecedor de id '${id}' não existe`)
            res.status(200).json(fornecedor);
        } catch (error) {
            res.status(404).json({
                msg: error.message
            });
        }
    });

    app.get("/fornecedor/nomefantasia/:nomefantasia", async (req, res) => {
        const nomefantasia = req.params.nomefantasia;
        try {
            const fornece = await fornecedorDAO.pegaFornecedorporNomeFantasia(nomefantasia);
            await verificaSeExisteObjeto(fornece, `Fornecedor de NOME FANTASIA '${nomefantasia}' não existe`)
            res.status(200).json(fornece);
        } catch (error) {
            res.status(404).json({
                msg: error.message
            });
        }
    });



    app.post("/fornecedor", async (req, res) => {
        const body = req.body;
        try {
                const novoFornecedor = new FornecedorModel(
                body.CNPJ,
                body.NOME_FANTASIA,
                body.TELEFONE,
                body.RUA,
                body.NUMERO,
                body.BAIRRO,
                body.CIDADE,
                body.UF,
                body.CEP,
            );
            
            await validaEntradaFornecedor(novoFornecedor)
            res.status(201).json(await fornecedorDAO.insereFornecedor(novoFornecedor));
            
        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });

    app.delete("/fornecedor/id/:id", async (req, res) => {
        const id = req.params.id;
        try {
            const fornecedor = await fornecedorDAO.pegaFornecedorPorID(id)
            await verificaSeExisteObjeto(fornecedor, `Fornecedor de id '${id}' não existe`);

            const delFornecedor = await fornecedorDAO.deletaFornecedor(id)
            res.status(200).json( delFornecedor);
        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });

    app.put("/fornecedor/id/:id", async (req, res) => {
        const id = req.params.id;
        const body = req.body;

        try {
            const fornecedorAtualizado = new FornecedorModel(
                body.CNPJ,
                body.NOME_FANTASIA,
                body.TELEFONE,
                body.RUA,
                body.NUMERO,
                body.BAIRRO,
                body.CIDADE,
                body.UF,
                body.CEP,
            );
            const fornecedor = await fornecedorDAO.pegaFornecedorPorID(id)

            const attFornecedor = await fornecedorDAO.atualizaFornecedor(id,fornecedorAtualizado);

            await verificaSeExisteObjeto(fornecedor, `Fornecedor de id '${id}' não existe`);
            
            verificaCampoVazio(fornecedorAtualizado);
            res.status(200).json(attFornecedor);

        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });
};

export default FornecedorController;