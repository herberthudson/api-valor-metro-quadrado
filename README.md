# API valor do metro quadrado

Esta é uma api simples que retornar o valor do metro quadrado fixo. Foi desenvolvida utilizando a forma básica e parcial do MVC, onde temos o model para controlar os dados o controller para retornar a requisições e as rotas para direcionar as solicitações.

Esta api utiliza o expressjs como framework para auxiliar no tratamento das requisições, e a biblioteca [lowdb](https://github.com/typicode/lowdb) para simular um pequeno banco de dados, salvando os dados em um arquivo simples de JSON. Utiliza-se também a biblioteca [chai](https://www.chaijs.com/) para realização dos testes.

Ela possui configuração com o CI do Github para validação da integridade do código a cada pull request, e configurado no Heroku para realizar o deploy a cada push na branch main neste repositório do Github.

## Instalação e execução local

Após realizar o clone local da api, é necessário ter o [docker](https://www.docker.com/) e [docker-compose](https://docs.docker.com/compose/install/) instalados para execução limpa, ou pode-se instalar os pacotes usando o `yarn` ou `npm i`.

Ao instalar os requisitos, pode-se testar localmente com `docker-compose up` ou `npm run dev`.

Os testes podem ser rodados utilizando o `npm run test`

## Documentação

A API já consta com o Swagger integrado com o expressjs, para visualizar é necessário acessar a rota `/api-docs`

A API também pode ser consultada online no endereço `https://api-valor-metro-quadrado.herokuapp.com/`
