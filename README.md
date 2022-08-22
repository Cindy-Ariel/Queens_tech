<img src="https://i.ibb.co/fCmnJXd/Whats-App-Image-2022-08-16-at-22-48-21.jpg" alt="Queens Tech" border="0">

# 👑 API REST - Queens Tech

Projeto educacional de finalização do Módulo IV do curso de Web Dev Full Stack da [Resilia Educação](https://www.resilia.com.br/).

Projeto realizado utilizando o [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/). Como banco de dados, foi utilizado o SQLite.

# Tabela de conteúdos

<!--ts-->

- [Pré-requisitos](#-pré-requisitos)
- [Packages](#-packages)
- [Instalação](#-instalação-da-aplicação)
- [Inicializando banco de dados](#%EF%B8%8F-inicializando-o-banco-de-dados)
- [Testes](#bug-testes)
- [Rotas](#%EF%B8%8F-rotas)
- [Hospedagem no Heroku](#-link-do-heroku)
- [Desenvolvido por](#-desenvolvido-por)
<!--te-->

## 📚 Pré-requisitos

- Node.js v.16.15.1
- NPM v.8.11.0

## 📦 Packages

- <a href="https://nodejs.org/en/">Node.Js</a>
- <a href="https://www.npmjs.com/">NPM</a>
- <a href="https://expressjs.com/pt-br/">Express</a>
- <a href="https://www.npmjs.com/package/sqlite3">SQLite</a>
- <a href="https://nodemon.io/">Nodemon</a>
- <a href="https://www.npmjs.com/package/jest">Jest</a>
- <a href="https://www.npmjs.com/package/cors">Cors</a>
- <a href="https://www.npmjs.com/package/supertest">Superteste</a>

## 📥 Instalação da aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:

```
git clone https://github.com/Cindy-Ariel/Queens_tech.git
```

Entrando na pasta:

```
cd Queens_tech
```

Instalando apenas pacotes necessários para funcionamento da API:

```
npm i --production
```

Instalando todos os pacotes:

```
npm install
```

Rodando o projeto:

```
npm start
```

## 🗂️ Inicializando o banco de dados

Para iniciar um banco de dados novo com os dados padrão, delete o arquivo `database.db` e rode o comando abaixo:

```
npm run dev
```

## :bug: Testes


Necessária a instalação de todas as dependências para o funcionamento.

```
npm test
```

## 🏎️ Rotas

### Cliente

- **GET /clientes**

  Esquema da resposta

  ```json
  {
  "dados":
    [
      {
        "ID": 1,
        "CPF": "145.125.952-07",
        "NOME": "Oslene Silva",
        "E-MAIL": "oslene.silva@hotmail.com.br",
        "TELEFONE": 753873,
        "RUA": "Piuma",
        "NUMERO": "5",
        "BAIRRO": "caicara",
        "CIDADE": "Belo Horizonte",
        "UF": "MG",
        "CEP": "35.145-150",
        "SENHA": "*******"
      }
      {
        "ID": 2,
        "CPF": "078.057.945-34",
        "NOME": "Karol Santos",
        "E-MAIL": "karolsilva@gmail.com",
        "TELEFONE": 75952376235,
        "RUA": "Juventino Pitombo",
        "NUMERO": "3",
        "BAIRRO": "Jardim Ameria",
        "CIDADE": "São Paulo",
        "UF": "SP",
        "CEP": "44022-123",
        "SENHA": "******"
      }
    ]
  }
  ```

- **GET /cliente/email/:email**

  Esquema da resposta

  ```json
  {
    "dados": 
      {
        "ID": 1,
        "CPF": "145.125.952-07",
        "NOME": "Oslene Silva",
        "E-MAIL": "oslene.silva@hotmail.com.br",
        "TELEFONE": 753873,
        "RUA": "Piuma",
        "NUMERO": "5",
        "BAIRRO": "caicara",
        "CIDADE": "Belo Horizonte",
        "UF": "MG",
        "CEP": "35.145-150",
        "SENHA": "*******"
      }
  }
  ```

- **POST /cliente**

  Esquema da resposta

  ```json
  {
    "Cliente inserido com sucesso!"
  }
  ```

- **PUT /cliente/id/:id**

  Esquema da resposta

  ```json
  {
    "Cliente atualizado!"
  }
  ```

- **DELETE /cliente/id/:id**

  Esquema da resposta

  ```json
  {
    "Cliente deletado com sucesso!"
  }
  ```

### Vendas

- **GET /vendas**

  Esquema da resposta

  ```json
  {
    "dados": 
      [
        {
          "ID": 1,
          "ID_PRODUTO": "1",
          "ID_CLIENTE": "1",
          "DESCONTO": "1",
          "ID_FUNCIONARIO": 1,
          "QUANTIDADE": 2,
          "VALOR_TOTAL": 21.99,
          "DATA_VENDA": "2022-08-16",
          "VALIDADE_GARANTIA": "2022-11-16"
        },
        {
          "ID": 3,
          "ID_PRODUTO": "3",
          "ID_CLIENTE": "1",
          "DESCONTO": "1",
          "ID_FUNCIONARIO": 3,
          "QUANTIDADE": 6,
          "VALOR_TOTAL": 20.99,
          "DATA_VENDA": "2022-10-09",
          "VALIDADE_GARANTIA": "2022-01-07"
        },
        {
          "ID": 4,
          "ID_PRODUTO": "3",
          "ID_CLIENTE": "3",
          "DESCONTO": "2",
          "ID_FUNCIONARIO": 3,
          "QUANTIDADE": 6,
          "VALOR_TOTAL": 10.99,
          "DATA_VENDA": "2022-10-07",
          "VALIDADE_GARANTIA": "2022-01-07"
        }
      ]
  }
  ```

- **GET /venda/id/:id**

  Esquema da resposta

  ```json
  {
    "dados": 
      {
        "ID": 1,
        "ID_PRODUTO": "1",
        "ID_CLIENTE": "1",
        "DESCONTO": "0",
        "ID_FUNCIONARIO": 1,
        "QUANTIDADE": 10,
        "VALOR_TOTAL": 21.99,
        "DATA_VENDA": "2022-08-16",
        "VALIDADE_GARANTIA": "2022-11-16"
      }
  }
  ```

- **POST /venda**

  Esquema da requisição

  ```json
  {
    "nome": "Rodrigo Erik",
    "cpf": "34576890234",
    "datadenascimento": "20/05/1998"
  }
  ```

  Esquema da resposta

  ```json
  {
    "Venda inserida com sucesso!"
  }
  ```

- **PUT /venda/id/:id**

  Esquema da requisição

  ```json
  {
    "nome": "Willian Igor",
    "cpf": "40567890234",
    "datadenascimento": "10/02/1995"
  }
  ```

  Esquema da resposta

  ```json
  {
    "Venda atualizada!"
  }
  ```

- **DELETE /venda/id/:id**

  Esquema da resposta

  ```json
  {
    "Venda deletada com sucesso!"
  }
  ```

### Produto

- **GET /produto**

  Esquema da resposta

  ```json
  {
  "dados": 
    [
      {
        "CODIGO": 1,
        "NOME": "Smartphone Xiaomi Poco M4 Pro 8GB 256GB Power Black -
        Preto",
        "CATEGORIA": "CELULARES E COMUNICAÇÃO",
        "MARCA": "Xiaomi",
        "COR": "Preto",
        "VALOR": 1599.99,
        "DESCRICAO": "RAM:8 GB|Capacidade de armazenamento da
        memória:256 GB|Tamanho da memória externa:256 GB|Capacidade de
        armazenamento digital:8 GB|Baterias inclusas:Sim|Tecnologia
        celular:4G",
        "FORNECEDOR_ID": 2
      },
      {
        "CODIGO": 2,
        "NOME": "Fone de Ouvido Motorola Moto XT 120 Som HD e
        Microfone-Preto",
        "CATEGORIA": "AUDIO E SOM",
        "MARCA": "Motorola",
        "COR": "Preto",
        "VALOR": 121.9,
        "DESCRICAO": "Características especiais:Dobrável|Número de unidades:1|Formato do microfone:Integrado|Tipo de fones:Sobre a orelha|Porta de áudio:Jack de 3.5 mm|Baterias inclusas:Não|Tecnologiade conexão:Com fio",
        "FORNECEDOR_ID": 1
      }
    ]
  }
  ```

- **GET /produto/codigo/:codigo**

  Esquema da resposta

  ```json
  {
    "dados": 
      {
        "CODIGO": 1,
        "NOME": "Smartphone Xiaomi Poco M4 Pro 8GB 256GB Power Black - Preto",
        "CATEGORIA": "CELULARES E COMUNICAÇÃO",
        "MARCA": "Xiaomi",
        "COR": "Preto",
        "VALOR": 1599.99,
        "DESCRICAO": "RAM:8 GB|Capacidade de armazenamento da memória:256 GB|Tamanho da memória externa:256 GB|Capacidade de armazenamento digital:8 GB|Baterias inclusas:Sim|Tecnologia celular:4G",
        "FORNECEDOR_ID": 2
      }
  }
  ```
- **GET /produto/categoria/:categoria**
  
  Esquema da resposta

  ```json
  {
    "dados": 
      {
        "CODIGO": 1,
        "NOME": "Smartphone Xiaomi Poco M4 Pro 8GB 256GB Power Black - Preto",
        "CATEGORIA": "CELULARES E COMUNICAÇÃO",
        "MARCA": "Xiaomi",
        "COR": "Preto",
        "VALOR": 1599.99,
        "DESCRICAO": "RAM:8 GB|Capacidade de armazenamento da memória:256 GB|Tamanho da memória externa:256 GB|Capacidade de armazenamento digital:8 GB|Baterias inclusas:Sim|Tecnologia celular:4G",
        "FORNECEDOR_ID": 2
      }
  }
  ```

- **POST /produto**

  Esquema da requisição

  ```json
  {
    {
      "NOME": "Smartphone Xiaomi Poco M4 Pro 8GB 256GB Power Black",
      "CATEGORIA": "CELULARES E COMUNICAÇÃO",
      "MARCA": "Xiaomi",
      "COR": "Preto",
      "VALOR": 1599.99,
      "DESCRICAO": "RAM:8 GB|Capacidade de armazenamento da memória:256 GB|Tamanho da memória externa:256 GB|Capacidade de armazenamento digital:8 GB|Baterias inclusas:Sim|Tecnologia celular:4G",
      "FORNECEDOR_ID": 2
    }
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Produto inserido com sucesso"
  }
  ```

- **PUT  /produto/codigo/:codigo**

  Esquema da requisição

  ```json
  {
    "CODIGO": 1,
    "NOME": "Smartphone Xiaomi Poco M4 Pro 8GB 256GB Power Black - Preto",
    "CATEGORIA": "CELULARES E COMUNICAÇÃO",
    "MARCA": "Xiaomi",
    "COR": "Preto",
    "VALOR": 15880.00,
    "DESCRICAO": "RAM:8 GB|Capacidade de armazenamento da memória:256 GB|Tamanho da memória externa:256 GB|Capacidade de armazenamento digital:8 GB|Baterias inclusas:Sim|Tecnologia celular:4G",
    "FORNECEDOR_ID": 2
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "Produto atualizados!"
  }
  ```

- **DELETE /produto/codigo/:codigo**

  Esquema da resposta

  ```json
  {
    "Produto deletado com sucesso!"
  }
  ```

### Fornecedores

- **GET /fornecedor**

  Esquema da resposta

  ```json
  [
    {
      "ID": 1,
      "CNPJ": "62.288.584/0001-08",
      "NOME_FANTASIA": "MOTOROLA",
      "TELEFONE": 1939325400,
      "RUA": "Rua Paes Leme",
      "NUMERO": "525",
      "BAIRRO": "Pinheiros",
      "CIDADE": "São Paulo",
      "UF": "SP",
      "CEP": "05424-010"
    },
    {
      "ID": 2,
      "CNPJ": "34.744.895/0003-52",
      "NOME_FANTASIA": "XIAOMI BRASIL",
      "TELEFONE": 1132800730,
      "RUA": "Avenida Paulista",
      "NUMERO": "171",
      "BAIRRO": "Jardim America",
      "CIDADE": "BELA VISTA",
      "UF": "SP",
      "CEP": "01311-000"
    }
  ]

  ```

- **GET /fornecedor/id/:id**

  Esquema da resposta

  ```json
  {
    {
      "ID": 1,
      "CNPJ": "62.288.584/0001-08",
      "NOME_FANTASIA": "MOTOROLA",
      "TELEFONE": 1939325400,
      "RUA": "Rua Paes Leme",
      "NUMERO": "525",
      "BAIRRO": "Pinheiros",
      "CIDADE": "São Paulo",
      "UF": "SP",
      "CEP": "05424-010"
    }
  }
  ```

- **GET /fornecedor/cpnj/:cpnj**

  Esquema da resposta

    ```json
    {
      {
        "ID": 1,
        "CNPJ": "62.288.584/0001-08",
        "NOME_FANTASIA": "MOTOROLA",
        "TELEFONE": 1939325400,
        "RUA": "Rua Paes Leme",
        "NUMERO": "525",
        "BAIRRO": "Pinheiros",
        "CIDADE": "São Paulo",
        "UF": "SP",
        "CEP": "05424-010"
      }
    }
    ```


- **POST /fornecedor**

  Esquema da requisição

  ```json
  {
    "CNPJ":"12.222.123/0001-11",
    "NOME_FANTASIA":"PHILIPS",
    "TELEFONE": "75986754356",
    "RUA": "AVENIDA TORRES",
    "NUMERO": "78",
    "BAIRRO": "JARDIM DO LIBANO",
    "CIDADE": "SAO PAULO",
    "UF": "SP",
    "CEP": "234567433333334444443322"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "fornecedor inserido com sucesso"
  }
  ```

- **PUT /fornecedor/id/:id**

  Esquema da requisição

  ```json
  {
    "CNPJ":"12.222.123/0001-11",
    "NOME_FANTASIA":"PHILIPS",
    "TELEFONE": "75986754356",
    "RUA": "AVENIDA TORRES",
    "NUMERO": "90",
    "BAIRRO": "JARDIM DO LIBANO",
    "CIDADE": "SAO PAULO",
    "UF": "SP",
    "CEP": "234567433333334444443322"
  }
  ```

  Esquema da resposta

  ```json
  {
    "msg": "fornecedor atualizados!"
  }
  ```

- **DELETE /fornecedor/id/:id**

  Esquema da resposta

  ```json
  {
    "fornecedor deletado com sucesso!"
  }
  ```
### Estoque

- **GET /estoque**

Esquema da resposta

  ```json
  [
    {  
      "ID": 1,
      "CODIGO_PRODUTO": 1,
      "QUANT_PRODUTO": 30
    },
    {	
      "ID": 2,
      "CODIGO_PRODUTO": 2,
      "QUANT_PRODUTO": 20
    },
    {
      "ID": 3,
      "CODIGO_PRODUTO": 4,
      "QUANT_PRODUTO": 15
    }
  ]
  ```

- **GET /estoque/codigo_produto/:codigo_produto**

Esquema da resposta

  ```json
  {
    "ID": 1,
    "CODIGO_PRODUTO": 1,
    "QUANT_PRODUTO": 30
  }
  ```

- **POST /estoque**

Esquema da requisição

  ```json
  {
    "CODIGO_PRODUTO":3 ,
		"QUANT_PRODUTO": 70
  }
  ```

Esquema de resposta

  ```json
  {
    "Estoque do produto de código 3 inserido com sucesso!"
  }
  ```

- **PUT /estoque/codigo_produto/:codigo_produto**

Esquema da requisição

  ```json
  {
    "CODIGO_PRODUTO":1 ,
		"QUANT_PRODUTO": 10
  }
  ```

Esquema de resposta

  ```json
  {
    "Estoque do produto de código 1 atualizado!"
  }
  ```

- **DELETE /estoque/codigo_produto/:codigo_produto**

Esquema de resposta

  ```json
  {
    "Estoque do produto de código 4 deletado com sucesso!"
  }
  ```


### Funcionarios

- **GET /funcionarios**

  Esquema da resposta

  ```json
  [
    {
      "ID": 1,
      "NOME": "Maria Silva",
      "CPF": "414.476.660-89",
      "RG": "41.925.102-9",
      "CARGO": "Vendedor(a)",
      "TELEFONE": 108177,
      "RUA": "Rua Miguel Arcanjo",
      "NUMERO": "78",
      "BAIRRO": "Bairro Jardim",
      "CIDADE": "São Caetano do Sul",
      "UF": "SP",
      "CEP": "35.145-150",
      "CNPJ": "64.538.560/0001-87"
    },
    {
      "ID": 2,
      "NOME": "João Santos",
      "CPF": "915.280.150-02",
      "RG": "32.391.736-7",
      "CARGO": "Estoquista",
      "TELEFONE": 110036,
      "RUA": "Av. Sara Zirlis",
      "NUMERO": "60",
      "BAIRRO": "Jardim America",
      "CIDADE": "Sao Paulo",
      "UF": "SP",
      "CEP": "44.022-123",
      "CNPJ": "14.179.770/0001-58"
    }
  ]
  ```

- **GET /funcionario/id/:id**

  Esquema da resposta

  ```json
  {
    "ID": 1,
    "NOME": "Maria Silva",
    "CPF": "414.476.660-89",
    "RG": "41.925.102-9",
    "CARGO": "Vendedor(a)",
    "TELEFONE": 108177,
    "RUA": "Rua Miguel Arcanjo",
    "NUMERO": "78",
    "BAIRRO": "Bairro Jardim",
    "CIDADE": "São Caetano do Sul",
    "UF": "SP",
    "CEP": "35.145-150",
    "CNPJ": "64.538.560/0001-87"
  }
  ```

- **GET /funcionario/cpf/:cpf**

   Esquema da resposta

  ```json
  {
    "ID": 1,
    "NOME": "Maria Silva",
    "CPF": "414.476.660-89",
    "RG": "41.925.102-9",
    "CARGO": "Vendedor(a)",
    "TELEFONE": 108177,
    "RUA": "Rua Miguel Arcanjo",
    "NUMERO": "78",
    "BAIRRO": "Bairro Jardim",
    "CIDADE": "São Caetano do Sul",
    "UF": "SP",
    "CEP": "35.145-150",
    "CNPJ": "64.538.560/0001-87"
  }
  ```

- **POST /funcionario**

  Esquema da requisição

  ```json
  {
    "NOME": "Bruna Santos",
    "CPF": "234.476.660-67",
    "RG": "41.925.102-9",
    "CARGO": "Vendedor(a)",
    "TELEFONE": 108177,
    "RUA": "Rua Miguel Arcanjo",
    "NUMERO": "78",
    "BAIRRO": "Bairro Jardim",
    "CIDADE": "São Caetano do Sul",
    "UF": "SP",
    "CEP": "35.145-150",
    "CNPJ": "64.538.560/0001-87"
  }

  ```

  Esquema da resposta

  ```json
  {
    "msg": "funcionario inserido com sucesso"
  }
  ```

- **PUT /funcionario/id/:id**

  Esquema da requisição

  ```json
  {
    "NOME": "Bruna Santos",
    "CPF": "234.476.660-67",
    "RG": "41.925.102-9",
    "CARGO": "Vendedor(a)",
    "TELEFONE": 108177,
    "RUA": "Rua Miguel Arcanjo",
    "NUMERO": "78",
    "BAIRRO": "Bairro Jardim",
    "CIDADE": "São Caetano do Sul",
    "UF": "SP",
    "CEP": "35.145-150",
    "CNPJ": "64.538.560/0001-87"
  }

  ```

  Esquema da resposta

  ```json
  {
    "msg": "funcionario atualizados!"
  }
  ```

- **DELETE /funcionario/id/:id**

  Esquema da resposta

  ```json
  {
    "funcionario deletado com sucesso!"
  }
  ```

### ERROS GERAIS

Esquema da resposta

- Caso não exista o produto

```json
{
  "msg": "Produto de código '90' não existe"
}

```

- Caso o produto já exista na base de dados

```json
{
  "msg": "produto de NOME 'Smartphone Xiaomi Poco M4 Pro 8GB 256GB Power Black' já cadastrado"
}
```

- Caso não exista o fornecedor

```json
{
  "msg": "Fornecedor de código '90' não existe"
}
```

- Caso existam campos vazios

```json
  {
    "msg": "Campo 'CNPJ' está vazio"
  }
```


## 🔌 Link do Heroku

 [API_REST-Queens_Tech](https://protected-scrubland-58745.herokuapp.com/funcionarios)


## 😊 Desenvolvido por

<table align='center'>
  <tr>
    <td align="center"><a href="https://github.com/Cindy-Ariel"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/94567136?v=4" width="100px;" alt=""/><br /><sub><b>Cindy Rocha</b></sub></a><br /><a href="https://github.com/Cindy-Ariel" title="Cindy">👑</a></td>
    <td align="center"><a href="https://github.com/gabisegger"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/96390723?v=4" width="100px;" alt=""/><br /><sub><b>Gabriela Segger</b></sub></a><br /><a href="https://github.com/gabisegger" title="Gabriela">👑</a></td>
    <td align="center"><a href="https://github.com/OsleneCerqueira"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/100585368?v=4" width="100px;" alt=""/><br /><sub><b>Oslene Cerqueira</b></sub></a><br /><a href="https://github.com/OsleneCerqueira" title="Oslene">👑</a></td>
  </tr>
