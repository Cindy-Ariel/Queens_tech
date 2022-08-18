import ClienteDAO from "../dao/cliente-dao.js";
import FornecedorDAO from "../dao/fornecedor-dao.js";
import ProdutoDAO from "../dao/produto-dao.js";
import EstoqueDAO from "../dao/estoque-dao.js";
import bd from "../infra/sqlite-db.js";

const fornecedorDAO = new FornecedorDAO(bd);
const produtoDAO = new ProdutoDAO(bd);
const clienteDAO = new ClienteDAO(bd);
const estoqueDAO = new EstoqueDAO(bd);


// VERIFICA SE OS CAMPOS ESTÃO VAZIOS
export const verificaCampoVazio = (variavel) => {
    for (const key in variavel) {
        if (!variavel[key]) {
            throw new Error(`Campo '${key.toLocaleUpperCase()}' está vazio`)
        }
    }
}
//  VERIFICA SE EXISTE O OBJETO NA TABELA
export const verificaSeExisteObjeto = async (variavel, msgErro) => {
    if (!variavel) {
        throw new Error(msgErro)
    }
}


//  VALIDANDO FORNECEDOR
export const validaEntradaFornecedor = async (fornecedor) => {
    verificaCampoVazio(fornecedor)
    const fornecedores = await fornecedorDAO.listaFornecedores()
    const fornecedorCadastrado = fornecedores.filter(f => f.CNPJ == fornecedor.cnpj)
    if (fornecedorCadastrado.length > 0) {
        throw new Error(`Fornecedor de cnpj ${fornecedor.cnpj} já cadastrado`)
    }
}


// VALIDANDO PRODUTO
export const validaEntradaProduto = async (produto) => {
    verificaCampoVazio(produto)
    const produtos = await produtoDAO.listaProdutos()
    const produtoCadastrado = produtos.filter(f => f.NOME == produto.nome)
    if (produtoCadastrado.length > 0) {
        throw new Error(`produto de NOME '${produto.nome}' já cadastrado`)
    }

}

// VALIDANDO CLIENTE
export const validaEntradaCliente = async (cliente) => {
    verificaCampoVazio(cliente)
    const clientes = await clienteDAO.listaClientes()
    const clienteCadastrado = clientes.filter(f => f.CPF == cliente.cpf)
    if (clienteCadastrado.length > 0) {
        throw new Error(`cliente de CPF '${cliente.cpf}' já cadastrado`)
    }

}

// VALIDANDO Estoque
export const validaEntradaEstoque = async (estoque) => {
    verificaCampoVazio(estoque)
    const estoques = await estoqueDAO.listaEstoques()
    const estoqueCadastrado = estoques.filter(f => f.CODIGO_PRODUTO == estoque.codigo_produto)
    if (estoqueCadastrado.length > 0) {
        throw new Error(`Estoque do produto de  código '${estoque.codigo_produto}' já cadastrado`)
    }

}

// VALIDANDO FUNCIONARIO
export const validaExistenciaDeFuncionario = (funcionario, res) => {
    if (funcionario) {
        return res.status(201).json(funcionario);
    } else {
        throw new Error("Não há um funcionario com a informação inserida")
    }
};

export const validaFuncionario = (nome, cpf, rg, cargo, telefone, rua, numero, bairro, cidade, uf, cep, cnpj) => {
    if (nome && cpf && rg && cargo && telefone && rua && numero && bairro && cidade && uf && cep && cnpj) {
        return true;
    } else {
        throw new Error("Alguma informação não foi inserida.");
    }
};
