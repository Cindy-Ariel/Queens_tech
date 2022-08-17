class VendaDao {
    constructor(bd) {
        this.bd = bd;
    }

    listaVendas = () => {
        return new Promise((resolve, reject) => {
            this.bd.all("SELECT * FROM VENDAS", (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });
        });
    };

    pegaUmaVendaPorID = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.get("SELECT * FROM VENDAS WHERE ID = ?", id, (error, rows) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(rows);
                }
            });


        });
    };

    insereVenda = (VendaModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(

                "INSERT INTO VENDAS VALUES (?,?,?,?,?,?,?,?,?)",
                VendaModel.id,
                VendaModel.id_produto,
                VendaModel.id_cliente,
                VendaModel.desconto,
                VendaModel.id_funcionario,
                VendaModel.quantidade,
                VendaModel.valor_total,
                VendaModel.data_venda,
                VendaModel.validade_garantia,
                
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Venda inserida com sucesso!');
                    }
                }
            );
        });
    };

    atualizaVenda = (id, VendaModel) => {
        return new Promise((resolve, reject) => {
            this.bd.run(
                "UPDATE VENDAS SET ID_PRODUTO = ?, ID_CLIENTE = ?, DESCONTO = ?, ID_FUNCIONARIO = ?, QUANTIDADE= ?, VALOR_TOTAL = ? , DATA_VENDA = ?, VALIDADE_GARANTIA = ? WHERE ID = ?",
                
                VendaModel.id_produto,
                VendaModel.id_cliente,
                VendaModel.desconto,
                VendaModel.id_funcionario,
                VendaModel.quantidade,
                VendaModel.valor_total,
                VendaModel.data_venda,
                VendaModel.validade_garantia,
                id,
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('Venda atualizada!');
                    }
                }
            );
        });

    };


    deletaVenda = (id) => {
        return new Promise((resolve, reject) => {
            this.bd.run("DELETE FROM VENDAS WHERE ID = ?", id, (error) => {
                if (error) {
                    reject(error);
                } else {
                    resolve('Venda deletada com sucesso!');
                }
            });
        });
    };
    _
}
export default VendaDao;