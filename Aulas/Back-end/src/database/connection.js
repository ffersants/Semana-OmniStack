//arquivo que faz a coneão com o banco de dados

const knex = require('knex');//importo o knex

//importa as configurações do banco de dados que estão no knexfile
const configuration = require('../../knexfile');

//dentro do knex file, a conexão é feita pelo development, dentro do configuration em knexfile
const connection = knex(configuration.development)

//propriamente dito é a conexão com o banco de dados
module.exports = connection;
/* 
a variável connection é exportada para ser utilizada nos arquivos
que necessitam fazer conexão com o banco de dados
*/