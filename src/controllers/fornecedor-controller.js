
import FornecedorModel from "../model/Fornecedor-model.js";
import FornecedorDAO from "../dao/Fornecedor-dao.js";

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
            const fornece = await fornecedorDAO.pegaUmFornecedorPorID(id);
            res.status(201).json(fornece);
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
            res.status(201).json(fornece);
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
            const delUsuario = await fornecedorDAO.deletaFornecedor(id);
            res.status(201).json(delUsuario);
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
            const FornecedorAtualizado = new FornecedorModel(
                body.CPF,
                body.NOME_FANTASIA,
                body.TELEFONE,
                body.RUA,
                body.NUMERO,
                body.BAIRRO,
                body.CIDADE,
                body.UF,
                body.CEP,
            );
            const attFornecedor = await fornecedorDAO.atualizaFornecedor(
                id,
                FornecedorAtualizado
            );
            res.status(200).json(attFornecedor);

        } catch (error) {
            res.status(400).json({
                msg: error.message
            });
        }
    });
};

export default FornecedorController;