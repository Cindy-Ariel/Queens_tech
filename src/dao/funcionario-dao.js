class FuncionarioDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaFuncionarios = () => {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM FUNCIONARIO", (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };
   
    pegaUmFuncionarioPorID = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.get("SELECT * FROM FUNCIONARIO WHERE ID = ?", id, (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
          
        
        });
    };

    pegaUmFuncionarioporCpf = (cpf) => {
      return new Promise((resolve, reject) => {
          this.bd.get( "SELECT * FROM FUNCIONARIO WHERE CPF = ?", cpf, (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            } });
          
        });
      }; 


    insereFuncionario = (funcionarioModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(

                "INSERT INTO FUNCIONARIO VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                funcionarioModel.id,
                funcionarioModel.nome,
                funcionarioModel.cpf,
                funcionarioModel.rg,
                funcionarioModel.cargo,
                funcionarioModel.telefone,
                funcionarioModel.rua,
                funcionarioModel.numero,
                funcionarioModel.bairro,
                funcionarioModel.cidade,
                funcionarioModel.uf,
                funcionarioModel.cep,
                funcionarioModel.cnpj,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Funcionario inserido com sucesso!');
                    }
                }
            );
        });
    };

    atualizaFuncionario = (id, funcionarioModel ) => {
        return new Promise((resolve, reject) => {
            this.bd.run(
                "UPDATE FUNCIONARIO SET  NOME = ?, CPF = ?, RG = ?, CARGO = ?, TELEFONE = ?, RUA = ?, NUMERO = ?, BAIRRO = ? , CIDADE = ?, UF = ?, CEP = ? , CNPJ = ? WHERE ID = ?",
    
                funcionarioModel.nome,
                funcionarioModel.cpf,
                funcionarioModel.rg,
                funcionarioModel.cargo,
                funcionarioModel.telefone,
                funcionarioModel.rua,
                funcionarioModel.numero,
                funcionarioModel.bairro,
                funcionarioModel.cidade,
                funcionarioModel.uf,
                funcionarioModel.cep,
                funcionarioModel.cnpj,
                id,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Funcionario atualizado!');
                    }
                }
            );
        });
    };


    deletaFuncionarios = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM FUNCIONARIO WHERE ID = ?", id, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Funcionario deletado com sucesso!');
                }
            });
        });
    };
_
}
export default FuncionarioDAO;