class EstoqueDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaEstoques = () => {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM ESTOQUE", (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    pegaEstoqueporCodigo_Produto = (codigo_produto) => {
        return new Promise((resolve, reject) => {
            this.bd.get(
                "SELECT * FROM ESTOQUE WHERE CODIGO_PRODUTO = ?",
                codigo_produto,
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




    insereEstoque = (EstoqueModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(

                "INSERT INTO ESTOQUE VALUES (?,?,?)",
                EstoqueModel.id,
                EstoqueModel.codigo_produto,
                EstoqueModel.quant_produto,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(`Estoque do produto de código ${EstoqueModel.codigo_produto} inserido com sucesso!`);
                    }
                }
            );
        });
    };

    atualizaEstoque = (codigo_produto, EstoqueModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(
                "UPDATE ESTOQUE SET CODIGO_PRODUTO = ?, QUANT_PRODUTO = ? WHERE CODIGO_PRODUTO = ?",
                EstoqueModel.codigo_produto,
                EstoqueModel.quant_produto,
                codigo_produto,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(`Estoque do produto de código ${codigo_produto} atualizado!`);
                    }
                }
            );
        });
    };


    deletaEstoque = (codigo_produto) => {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM ESTOQUE WHERE CODIGO_PRODUTO = ?", codigo_produto, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(`Estoque do produto de código ${codigo_produto} deletado com sucesso!`);
                }
            });
        });
    };

}
export default EstoqueDAO;