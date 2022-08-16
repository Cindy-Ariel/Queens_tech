export const validaExistenciaDeCliente = (cliente , res) => {
    if (cliente){
   return  res.status(201).json(cliente);
   } else {
    throw new Error("Não há um cliente com a informação inserida")
   }
 };
 
 export const validaTudo = (cpf,nome, email,telefone,rua,numero,bairro,cidade,uf,cep,senha) => {
    if (cpf && nome && email && telefone && rua && numero && bairro && cidade && uf && cep && senha) {
      return true;
    } else {
      throw new Error("Alguma informação não foi inserida.");
    }
  };
  
export const validaExistenciaDeFuncionario = (funcionario , res) => {
    if (funcionario){
   return  res.status(201).json(funcionario);
   } else {
    throw new Error("Não há um funcionario com a informação inserida")
   }
 };
 
export const validaFuncionario = (nome,cpf,rg,cargo,telefone,rua,numero,bairro,cidade,uf,cep,cnpj) => {
    if (nome && cpf && rg && cargo && telefone && rua && numero && bairro && cidade && uf && cep && cnpj) {
      return true;
    } else {
      throw new Error("Alguma informação não foi inserida.");
    }
  };