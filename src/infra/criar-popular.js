import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./database.db');


//==== Criando tabela cliente 
export const CLIENTE_TABELA = `
CREATE TABLE IF NOT EXISTS "CLIENTE" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CPF" varchar(14),
    "NOME" varchar(64),
    "EMAIL" varchar(64),
    "TELEFONE" numeric ,
    "RUA" varchar(50),
    "NUMERO" varchar(10),
    "BAIRRO" varchar(50),
    "CIDADE" varchar(50),
    "UF" varchar(2),
    "CEP" varchar(10),
    "SENHA" varchar(10)
  );`;

//=== Populando tabela cliente 
const ADD_CLIENTE_DATA = `
INSERT INTO CLIENTE (CPF, NOME, EMAIL, TELEFONE, RUA, NUMERO, BAIRRO, CIDADE, UF, CEP, SENHA)
VALUES 
    ('145.125.952-07', 'Oslene Silva', 'oslene.silva@hotmail.com.br', 759698-5825, 'Piuma', '5' , 'caicara' , 'Belo Horizonte' , 'MG', '35.145-150','*******'),
    ('078.057.945-34', 'Karol Santos', 'karolsilva@gmail.com', 75952376235, 'Juventino Pitombo', '3', 'Jardim America', 'Sao Paulo', 'SP', '44022-123', '******') `
   


//==== Criando tabela vendas
    const TABELA_VENDAS= `
    CREATE TABLE IF NOT EXISTS "VENDAS" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "ID_PRODUTO" integer,
    "ID_CLIENTE" integer,
    "DESCONTO" varchar(10),
    "ID_FUNCIONARIO" integer,
    "QUANTIDADE" integer,
    "VALOR_TOTAL" decimal(10,2),
    "DATA_VENDA" date,
    "VALIDADE_GARANTIA" date,
    FOREIGN KEY(ID_PRODUTO) REFERENCES PRODUTOS(CODIGO),
    FOREIGN KEY(ID_CLIENTE) REFERENCES CLIENTE(ID),
    FOREIGN KEY(ID_FUNCIONARIO) REFERENCES FUNCIONARIO(ID)
  );`;


//=== Populando tabela vendas 
const ADD_DADOS_VENDAS = `
INSERT INTO VENDAS (ID_PRODUTO, ID_CLIENTE, DESCONTO, ID_FUNCIONARIO, QUANTIDADE, VALOR_TOTAL, DATA_VENDA, VALIDADE_GARANTIA)
VALUES 
    (1, 1, '0.00', 1, 1, 21.99, '2022-08-16', '2022-11-16')`
  
    

    function criaTabela(nomeDaTabela) {
        db.run(nomeDaTabela, (error) => {
            if (error) console.log(`Erro ao criar tabela '${nomeDaTabela}'`);
        });
      }
      
      function populaTabela(dadosTabela) {
        db.run(dadosTabela, (error) => {
            if (error) console.log(`Erro ao popular tabela '${dadosTabela}'`);
        });
      }

  

    db.serialize(() => {
        criaTabela(CLIENTE_TABELA)
        populaTabela(ADD_CLIENTE_DATA)

        criaTabela(TABELA_VENDAS)
        populaTabela(ADD_DADOS_VENDAS)
      });