// bd = banco de dados
class ProdutoDAO {
    constructor(bd) {
        this.bd = bd;
    }

    listaProdutos = () => {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM PRODUTO", (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    pegaProdutoPorCodigo = (codigo) => {
        return new Promise((resolve, reject) => {
            this.bd.get("SELECT * FROM PRODUTO WHERE CODIGO = ?", codigo, (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    pegaProdutoPorCategoria = (categoria) => {
        return new Promise((resolve, reject) => {
            this.bd.get(
                "SELECT * FROM PRODUTO WHERE CATEGORIA = ?",
                categoria,
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




    insereProduto = (ProdutoModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(

                "INSERT INTO PRODUTO VALUES (?,?,?,?,?,?,?,?)",
                ProdutoModel.codigo,
                ProdutoModel.nome,
                ProdutoModel.categoria,
                ProdutoModel.marca,
                ProdutoModel.cor,
                ProdutoModel.valor,
                ProdutoModel.descricao,
                ProdutoModel.fornecedor,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Produto insercodigoo com sucesso!');
                    }
                }
            );
        });
    };

    atualizaProduto = (codigo, ProdutoModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(
                "UPDATE PRODUTO SET NOME = ?, CATEGORIA = ?, MARCA = ?, COR = ?, VALOR = ?, DESCRICAO = ?, FORNECEDOR = ? WHERE CODIGO = ?",

                ProdutoModel.nome,
                ProdutoModel.categoria,
                ProdutoModel.marca,
                ProdutoModel.cor,
                ProdutoModel.valor,
                ProdutoModel.descricao,
                ProdutoModel.fornecedor,
                codigo,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Produto atualizado!');
                    }
                }
            );
        });
    };


    deletaProduto = (codigo) => {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM PRODUTO WHERE CODIGO = ?", codigo, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Produto deletado com sucesso!');
                }
            });
        });
    };

}
export default ProdutoDAO;