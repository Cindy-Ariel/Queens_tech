

class ClienteDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaClientes = () => {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM CLIENTE", (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };
   
    pegaUmClientePorID = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.get("SELECT * FROM CLIENTE WHERE ID = ?", id, (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
          
        
        });
    };

    pegaUmClienteporEmail = (email) => {
      return new Promise((resolve, reject) => {
          this.bd.get( "SELECT * FROM CLIENTE WHERE EMAIL = ?", email, (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            } });
          
        });
      }; 


    insereCliente = (ClienteModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(

                "INSERT INTO CLIENTE VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
                ClienteModel.id,
                ClienteModel.cpf,
                ClienteModel.nome,
                ClienteModel.email,
                ClienteModel.telefone,
                ClienteModel.rua,
                ClienteModel.numero,
                ClienteModel.bairro,
                ClienteModel.cidade,
                ClienteModel.uf,
                ClienteModel.cep,
                ClienteModel.senha,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Cliente inserido com sucesso!');
                    }
                }
            );
        });
    };

    atualizaCliente = (id, ClienteModel ) => {
        return new Promise((resolve, reject) => {
            this.bd.run(
                "UPDATE CLIENTE SET CPF = ?, NOME = ?, EMAIL = ?, TELEFONE = ?, RUA = ?, NUMERO = ?, BAIRRO = ? , CIDADE = ?, UF = ?, CEP = ? , SENHA = ? WHERE ID = ?",
    
                ClienteModel.cpf,
                ClienteModel.nome,
                ClienteModel.email,
                ClienteModel.telefone,
                ClienteModel.rua,
                ClienteModel.numero,
                ClienteModel.bairro,
                ClienteModel.cidade,
                ClienteModel.uf,
                ClienteModel.cep,
                ClienteModel.senha,
                id,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Cliente atualizado!');
                    }
                }
            );
        });
    };


    deletaCliente = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM CLIENTE WHERE ID = ?", id, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Cliente deletado com sucesso!');
                }
            });
        });
    };
_
}
export default ClienteDAO;