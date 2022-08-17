class FornecedorDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaFornecedores = () => {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM FORNECEDORES", (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    pegaFornecedorPorID = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.get("SELECT * FROM FORNECEDORES WHERE ID = ?", id, (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    pegaFornecedorporNomeFantasia = (NomeFantasia) => {
        return new Promise((resolve, reject) => {
            this.bd.get(
                "SELECT * FROM FORNECEDORES WHERE NOME_FANTASIA = ?",
                NomeFantasia,
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




    insereFornecedor = (FornecedorModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(

                "INSERT INTO FORNECEDORES VALUES (?,?,?,?,?,?,?,?,?,?)",
                FornecedorModel.id,
                FornecedorModel.cnpj,
                FornecedorModel.nomeFantasia,
                FornecedorModel.telefone,
                FornecedorModel.rua,
                FornecedorModel.numero,
                FornecedorModel.bairro,
                FornecedorModel.cidade,
                FornecedorModel.uf,
                FornecedorModel.cep,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Fornecedor inserido com sucesso!');
                    }
                }
            );
        });
    };

    atualizaFornecedor = (id, FornecedorModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(
                "UPDATE FORNECEDORES SET CNPJ = ?, NOME_FANTASIA = ?, TELEFONE = ?, RUA = ?, NUMERO = ?, BAIRRO = ? , CIDADE = ?, UF = ?, CEP = ? WHERE ID = ?",

                FornecedorModel.cnpj,
                FornecedorModel.nomeFantasia,
                FornecedorModel.telefone,
                FornecedorModel.rua,
                FornecedorModel.numero,
                FornecedorModel.bairro,
                FornecedorModel.cidade,
                FornecedorModel.uf,
                FornecedorModel.cep,
                id,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Fornecedor atualizado!');
                    }
                }
            );
        });
    };


    deletaFornecedor = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM FORNECEDORES WHERE ID = ?", id, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Fornecedor deletado com sucesso!');
                }
            });
        });
    };

}
export default FornecedorDAO;