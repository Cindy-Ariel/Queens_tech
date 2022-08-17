class FornecedorModel {


    constructor(cnpj, nomeFantasia, telefone, rua, numero, bairro, cidade, uf, cep) {
        this.cnpj = cnpj;
        this.nomeFantasia = nomeFantasia;
        this.telefone = telefone;
        this.rua = rua;
        this.numero = numero;
        this.bairro = bairro;
        this.cidade = cidade;
        this.uf = uf;
        this.cep = cep;
    }

}

export default FornecedorModel;