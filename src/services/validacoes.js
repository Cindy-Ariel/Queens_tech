import ClienteDAO from "../dao/cliente-DAO.js";
import bd from "../infra/sqlite-db.js";


const clienteDAO = new ClienteDAO(bd)
 
 
 const verificaSeExisteObjeto = async (variavel, msgErro) => {
  if (!variavel) {
      throw new Error(msgErro)
  }
  };

 const verificaCampoVazio = (variavel) => {
  for (const key in variavel) {
      if (!variavel[key]) {
          throw new Error(`Campo '${key.toLocaleUpperCase()}' está vazio`)
      }
  }
}

const validaEntradaCliente = async (cliente) => {
  verificaCampoVazio(cliente) 
  const clientes = await clienteDAO.listaClientes()
      const clienteCadastrado = clientes.filter(f => f.CPF == cliente.cpf)
      if (clienteCadastrado.length > 0) {
          throw new Error(`cliente de CPF '${cliente.cpf}' já cadastrado`)
      }
  
}


export {verificaSeExisteObjeto, verificaCampoVazio,validaEntradaCliente }