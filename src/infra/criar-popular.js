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
    ('078.057.945-34', 'Karol Santos', 'karolsilva@gmail.com', 75952376235, 'Juventino Pitombo', '3', 'Jardim America', 'Sao Paulo', 'SP', '44022-123', '******')
    `

//==== Criando tabela funcionario 
const  FUNCIONARIO_TABELA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIO" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "NOME" varchar(64),
    "CPF" varchar(14),
    "RG" varchar(12),
    "CARGO" varchar(64),
    "TELEFONE" int(25),
    "RUA" varchar(50),
    "NUMERO" varchar(10),
    "BAIRRO" varchar(50),
    "CIDADE" varchar(50),
    "UF" varchar(2),
    "CEP" varchar(10),
    "CNPJ" varchar(18)
  );`;

//=== Populando tabela funcioario
const ADD_FUNCIONARIO_DATA = `
INSERT INTO FUNCIONARIO (NOME, CPF, RG, CARGO, TELEFONE, RUA, NUMERO, BAIRRO, CIDADE, UF, CEP, CNPJ)
VALUES 
    ('Maria Silva', '414.476.660-89', '41.925.102-9', 'Vendedor(a)', 112682-4505, 'Rua Miguel Arcanjo', '78' , 'Bairro Jardim' , 'São Caetano do Sul' , 'SP', '35.145-150','64.538.560/0001-87'),
    ('João Santos', '915.280.150-02', '32.391.736-7', 'Estoquista', 112062-2026, 'Av. Sara Zirlis', '60', 'Jardim America', 'Sao Paulo', 'SP', '44.022-123', '14.179.770/0001-58')`


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


// CRIANDO TABELA FORNECEDORES
const TABELA_FORNECEDORES = `
    CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CNPJ" varchar(18),
    "NOME_FANTASIA" varchar(64),
    "TELEFONE" numeric ,
    "RUA" varchar(50),
    "NUMERO" varchar(10),
    "BAIRRO" varchar(50),
    "CIDADE" varchar(50),
    "UF" varchar(2),
    "CEP" varchar(10)
    );`;

    //=== Populando tabela FORNECEDORES
const ADD_DADOS_FORNECEDORES = `
INSERT INTO FORNECEDORES (CNPJ, NOME_FANTASIA, TELEFONE, RUA, NUMERO, BAIRRO, CIDADE, UF, CEP)
VALUES 
    ('62.288.584/0001-08', 'MOTOROLA', 1939325400, 'Rua Paes Leme', '525' , 'Pinheiros' , 'São Paulo' , 'SP','05424-010'),
    ('34.744.895/0003-52', 'XIAOMI BRASIL', 1132800730, 'Avenida Paulista', '171', 'Jardim America', 'BELA VISTA', 'SP', '01311-000'),
    ('07.275.920/0001-61', 'LENOVO TECNOLOGIA BRASIL', 1182083099, 'JOSE COSTA DE MESQUITA', '200', 'CHACARA ALVORADA', 'INDAIATUBA', 'SP', '13337-200'),
    ('05.602.941/0001-19', 'TRANYA', 1157125440, ' Antonio Clemente', '256' , 'Jardim Sao Paulo' , 'São Paulo' , 'SP', '02.039-020')
    `



// CRIANDO TABELA PRODUTO 
const TABELA_PRODUTOS = `
        CREATE TABLE IF NOT EXISTS "PRODUTOS" (
            "CODIGO" INTEGER PRIMARY KEY AUTOINCREMENT,
            "NOME" varchar(100),
            "CATEGORIA" varchar(50),
            "MARCA" varchar(50),
            "COR" varchar(20),
            "VALOR" Decimal(10,2),
            "DESCRICAO" varchar(300),
            "FORNECEDOR_ID" INTEGER,
            FOREIGN KEY(FORNECEDOR_ID) REFERENCES FORNECEDORES(ID)
            );`;

//=== Populando tabela PRODUTOS 
const ADD_DADOS_PRODUTOS = `
    INSERT INTO PRODUTOS (NOME, CATEGORIA, MARCA, COR, VALOR, DESCRICAO, FORNECEDOR_ID)
    VALUES 
    ('Smartphone Xiaomi Poco M4 Pro 8GB 256GB Power Black - Preto', 'CELULARES E COMUNICAÇÃO', 'Xiaomi', 'Preto', 1599.99 , 'RAM:8 GB|Capacidade de armazenamento da memória:256 GB|Tamanho da memória externa:256 GB|Capacidade de armazenamento digital:8 GB|Baterias inclusas:Sim|Tecnologia celular:4G', 2),
    ('Fone de Ouvido Motorola Moto XT 120 Som HD e Microfone-Preto', 'AUDIO E SOM', 'Motorola', 'Preto', 121.90 , 'Características especiais:Dobrável|Número de unidades:1|Formato do microfone:Integrado|Tipo de fones:Sobre a orelha|Porta de áudio:Jack de 3.5 mm|Baterias inclusas:Não|Tecnologia de conexão:Com fio', 1),
    ('Notebook Lenovo Ultrafino IdeaPad 3 Ryzen 5 5500U 8GB 256GB SSD Prata 15.6 Linux', 'COMPUTADORES', 'Lenovo', 'Cinza', 1999.00, 'IdeaPad 3 possui design leve e compacto armazenamento SSD 256GB| Privacidade de webcam com câmera HD-720p| Wi-Fi AC ultrarrápido teclado numérico para trabalhar com mais agilidade nas suas planilhas', 3),
    ('Fone de ouvido Bluetooth Tranya T20','AUDIO E SOM','TRANYA','Preto', 90.00,'Som premium com graves profundos| Tempo de reprodução 8H| Design de 4 microfones para chamadas| Modo de jogo de baixa latência| IPX7 à prova d água', 4)
    `




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

    criaTabela(FUNCIONARIO_TABELA)
    populaTabela(ADD_FUNCIONARIO_DATA)

    criaTabela(TABELA_VENDAS)
    populaTabela(ADD_DADOS_VENDAS)

    criaTabela(TABELA_FORNECEDORES)
    populaTabela(ADD_DADOS_FORNECEDORES)

    criaTabela(TABELA_PRODUTOS)
    populaTabela(ADD_DADOS_PRODUTOS)
});
