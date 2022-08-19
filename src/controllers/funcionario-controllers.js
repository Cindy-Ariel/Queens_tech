import FuncionarioModel from "../model/funcionario-model.js";
import FuncionarioDAO from "../dao/funcionario-dao.js";
import  {validaExistenciaDeFuncionario}  from "../services/validacoes.js"
import  {validaFuncionario}  from "../services/validacoes.js"

const funcionarioController = (app, bd) => {
  const funcionarioDAO = new FuncionarioDAO(bd);


  app.get("/funcionarios", async (req, res) => {
    try {
      res.json(await funcionarioDAO.listaFuncionarios());
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true,
      });
    }
  }); 

  app.get("/funcionario/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const funcionario = await funcionarioDAO.pegaUmFuncionarioPorID(id);
      validaExistenciaDeFuncionario(funcionario,res)
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        error: true,
      });
    }
  });

  app.get("/funcionario/cpf/:cpf", async (req, res) => {
    const cpf = req.params.cpf;
    try {
      const funcionario = await funcionarioDAO.pegaUmFuncionarioporCpf(cpf);
      validaExistenciaDeFuncionario(funcionario,res)
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        error: true,
      });
    }
  });

  app.post("/funcionario", async (req, res) => {
    const body = req.body;
    try {
        const novoFuncionario = new FuncionarioModel(
            body.nome,
            body.cpf,
            body.rg,
            body.cargo,
            body.telefone,
            body.rua,
            body.numero,
            body.bairro,
            body.cidade,
            body.uf,
            body.cep,
            body.cnpj
        );
        //console.log(novoFuncionario)
        validaFuncionario(novoFuncionario)
        res.status(201).json(await funcionarioDAO.insereFuncionario(novoFuncionario));
      } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true,
      });
    }
  });

  app.delete("/funcionario/id/:id", async (req, res) => {
    const id = req.params.id;
    try {
      const delFuncionario = await funcionarioDAO.deletaFuncionarios(id);
      res.status(201).json(delFuncionario);
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true,
      });
    }
  });

  app.put("/funcionario/id/:id", async (req, res) => {
    const id = req.params.id;
    const body = req.body;

    try {
        const funcionarioAtualizado = new FuncionarioModel(
          body.NOME,
          body.CPF,
          body.RG,
          body.CARGO,
          body.TELEFONE,
          body.RUA,
          body.NUMERO,
          body.BAIRRO,
          body.CIDADE,
          body.UF,
          body.CEP,
          body.CNPJ
        );
        const attFuncionario = await funcionarioDAO.atualizaFuncionario(
          id,
          funcionarioAtualizado
        );
        res.status(200).json(attFuncionario);
      
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        error: true,
      });
    }
  });
};

export default funcionarioController;