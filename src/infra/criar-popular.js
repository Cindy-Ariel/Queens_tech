import sqlite3 from "sqlite3";
const db = new sqlite3.Database('./database.db');

//==== Criando tabela cliente 
const CLIENTE_TABELA = `
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
    ('078.057.945-34', 'Karol Santos', 'karolsilva@gmail.com', 75952376235, 'Juventino Pitombo', '3', 'Jardim America', 'Sao Paulo', 'SP', '44022-123', '******')
    `
  


    function criaTabelaCliente() {
        db.run(CLIENTE_TABELA, (error)=> {
            if(error) console.log("Erro ao criar tabela de cliente");
        });
    }
    
    
    function populaTabelaCliente() {
        db.run(ADD_CLIENTE_DATA , (error)=> {
           if (error) console.log("Erro ao popular tabela de cliente");
        });
    }


// CRIANDO TABELA PRODUTO 
const TABELA_PRODUTOS = `
CREATE TABLE IF NOT EXISTS "PRODUTOS" (
    "CODIGO" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(50),
    "CATEGORIA" varchar(50),
    "MARCA" varchar(50),
    "COR" varchar(20),
    "VALOR" Decimal(10,2),
    "DESCRIÇÃO" varchar(300),
    "FORNECEDOR_ID" varchar(50),
    FOREIGN KEY(FORNECEDOR_ID) REFERENCES FORNECEDORES(ID)
  );`;

  function criaTabelaProdutos() {
    db.run(TABELA_PRODUTOS, (error)=> {
        if(error) console.log("Erro ao criar tabela de PRODUTOS");
    });
}



    db.serialize( ()=> {
        criaTabelaCliente();
        populaTabelaCliente();
        criaTabelaProdutos();
    });