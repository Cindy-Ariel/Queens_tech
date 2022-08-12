// bd = banco de dados
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

    pegarClientePorID= (id) => {
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



    insereCliente = (ClienteModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(

                "INSERT INTO CLIENTE VALUES (?, ?, ?, ?, ?, ?,?,?,?,?,?)",
                
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
                (error, rows) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(rows);
                    }
                }
            );
        });
    };

    atualizaCliente = (ClienteModel, id) => {
        return new Promise((resolve, reject) => {
            this.bd.run(
                "UPDATE CLIENTE SET CPF = ?, NOME = ?, EMAIL = ?, TELEFONE = ?, RUA = ?, NUMERO = ?, CIDADE = ?, UF = ?, CEP = ? SENHA = ? WHERE ID = ?",
    
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
                (error, rows) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(rows);
                    }
                }
            );
        });
    };



    deletaCliente = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM CLIENTE WHERE ID = ?", id, (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

}
export default ClienteDAO;