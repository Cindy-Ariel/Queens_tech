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


    insereFuncionario = (FuncionarioModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(

                "INSERT INTO FUNCIONARIO VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                FuncionarioModel.id,
                FuncionarioModel.nome,
                FuncionarioModel.cpf,
                FuncionarioModel.rg,
                FuncionarioModel.cargo,
                FuncionarioModel.telefone,
                FuncionarioModel.rua,
                FuncionarioModel.numero,
                FuncionarioModel.bairro,
                FuncionarioModel.cidade,
                FuncionarioModel.uf,
                FuncionarioModel.cep,
                FuncionarioModel.cnpj,
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

    atualizaFuncionario = (id, FuncionarioModel ) => {
        return new Promise((resolve, reject) => {
            this.bd.run(
                "UPDATE FUNCIONARIO SET  NOME = ?, CPF = ?, RG = ?, CARGO = ?, TELEFONE = ?, RUA = ?, NUMERO = ?, BAIRRO = ? , CIDADE = ?, UF = ?, CEP = ? , CNPJ = ? WHERE ID = ?",
    
                FuncionarioModel.nome,
                FuncionarioModel.cpf,
                FuncionarioModel.rg,
                FuncionarioModel.cargo,
                FuncionarioModel.telefone,
                FuncionarioModel.rua,
                FuncionarioModel.numero,
                FuncionarioModel.bairro,
                FuncionarioModel.cidade,
                FuncionarioModel.uf,
                FuncionarioModel.cep,
                FuncionarioModel.cnpj,
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