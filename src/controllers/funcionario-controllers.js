import funcionarioModel from "../model/funcionario-model.js";
import FuncionarioDAO from "../dao/funcionario-DAO.js";
import  { validaEntradaFuncionario, verificaSeExisteObjeto,verificaCampoVazio }  from "../services/validacoes.js"

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
      await verificaSeExisteObjeto(funcionario,`Funcionario de id '${id}' não existe`)
      res.status(200).json(funcionario);
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
      await verificaSeExisteObjeto(funcionario,`Funcionario de cpf '${cpf}' não existe`)
      res.status(200).json(funcionario);
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
        const novoFuncionario = new funcionarioModel(
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
        await validaEntradaFuncionario(novoFuncionario)
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
      const funcionario = await funcionarioDAO.pegaUmFuncionarioPorID(id);
      await verificaSeExisteObjeto(funcionario,`Fornecedor de id '${id}' não existe`)

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
        const funcionarioAtualizado = new funcionarioModel(
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
        const funcionario = await funcionarioDAO.pegaUmFuncionarioPorID(id);

        const attFuncionario = await funcionarioDAO.atualizaFuncionario(
          id,
          funcionarioAtualizado
        );
        await verificaSeExisteObjeto(funcionario, `Funcionario de id '${id}' não existe`);
            
            verificaCampoVazio(funcionarioAtualizado);
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