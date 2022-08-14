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