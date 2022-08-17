class VendaModel{

    constructor(id_produto, id_cliente, desconto, id_funcionario, quantidade, valor_total, data_venda, validade_garantia) {
    
            this.id_produto = id_produto,
            this.id_cliente = id_cliente,
            this.desconto = desconto,
            this.id_funcionario = id_funcionario,
            this.quantidade = quantidade,
            this.valor_total = valor_total,
            this.data_venda = data_venda,
            this.validade_garantia = validade_garantia

    }

}

export default VendaModel;