import FornecedorDAO from "../dao/Fornecedor-dao.js";
import ProdutoDAO from "../dao/produto-dao.js";
import bd from "../infra/sqlite-db.js";

const fornecedorDAO = new FornecedorDAO(bd);
const produtoDAO = new ProdutoDAO(bd)


// VERIFICA CAMPOS
export const campoNaoVazio = (obj) => {
    for (const key in obj) {
        if (!obj[key]) {
            throw new Error(`Campo '${key.toLocaleUpperCase()}' está vazio`)
        }
    }
}
//  VERIFICA SE EXISTE O OBJETO NA TABELA
export const verificaSeExisteObjeto = async (identificador, msgErro) => {
    if (!identificador) {
        throw new Error(msgErro)
    }
    }
        

//  VALIDANDO FORNECEDOR
export const validaEntradaFornecedor = async (fornecedor) => {
    campoNaoVazio(fornecedor) 
    const fornecedores = await fornecedorDAO.listaFornecedores()
    const fornecedorCadastrado = fornecedores.filter(f => f.CNPJ == fornecedor.cnpj)
    if (fornecedorCadastrado.length > 0) {
        throw new Error(`Fornecedor de cnpj ${fornecedor.cnpj} já cadastrado`)
    }
}



// VALIDANDO PRODUTO
export const validaEntradaProduto = async (produto) => {
    campoNaoVazio(produto) 
    const produtos = await produtoDAO.listaProdutos()
        const produtoCadastrado = produtos.filter(f => f.NOME == produto.nome)
        if (produtoCadastrado.length > 0) {
            throw new Error(`produto de NOME '${produto.nome}' já cadastrado`)
        }
    
}



