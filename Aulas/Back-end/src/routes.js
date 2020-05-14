const express = require('express');


const OngController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();
//esqueci de trocar app por routes e isso me fez reiniciar a semana do dia 1

routes.post('/sessions', sessionController.create);

//rota que retorna um as informações das ongs cadastrdas na tabela ong do banco
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)//id do incidente a ser deletado

module.exports = routes; //exporta a variável routes para ser utilizada em outro arquivo



/*
    a função como um todo, que começa logo após routes.post, deve ser executada por completo
    somente depois que os dados inseridos pelo usuário sejam salvas no banco de dados, ou seja,
    return response.json({id}) SÓ DEVE SER EXECUTADA DEPOIS QUE
    connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        ciy,
        uf,
    }) 
    CONCLUIR SUA EXECUÇÃO, pois caso contrário o usuário pode receber uma id achando que seu cadastro foi
    concluído, e no entanto os dados ainda estão sendo registrados no banco
*/

/*
* Métodos HTTP:
 - GET: Utilizado para buscar/listar informações do back-end;
    ex.: quando deseja buscar o nome de usuário e logar na página
 - POST: Criar uma informação no back-end;
    ex.: uma rota que cria um novo usuário
- PUT: Alterar uma informação no back-end
    ex.: 
- DELTE: Deletar uma informação no back-end;
*/

/*
 * Tipos de parâmetros:
 - Query Params: Parâmetros nomeados enviados na rota após o ?, servindo para realizar filtros/pesquisas geralmente
    ex.: app.get('/users?name=Fernando') buscar usuários com o nome Fernando, name: nome do parâmetro, fernando: valor do parâmetro

- Route Params: Parâmetros utilizados para identificar recursos ou um único usuário.
    ex.: quero acessar os dados de um único usuário, determinando o seu id no parâmetro request

    app.get('/users/:id', (request, response) => {
        const params = request.query;

        console.log(params)
    
        return response.json({
        evento: 'Semana Omnistack 11.0',
        aluno: 'Fernando Ferreira'
    })
})

    *dentro do request, a rota recebida está sendo passada para a variável params e tendo seu valor logado no console*

- Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/


// request guarda dados da requisição do usuário, o response é responsável pelo retorno como resposta ao usuário

// post envia dados que são enviados na url pelo usuário, portanto trata-se de uma REQUEST.QUERY

// node index.js to run the server
// npm start inica o servidor, ctrl + c para

/* Bancos de dados 
    SQL: MySQL, SQLite, Oracle, PostgreSQL
    NoSQL (relacionais): MongoDB, CouchDB, DB2...
*/

/*
    Para comunicar-se com o banco de dados, há três estretágias:
    - Driver: pacote oficial do banco de dados para node
        exemplo de chamada: SELECT * FROM users
    - Query Builder: as queries são escritas em Javascript, mais versátil pois, caso haja migração do banco de dados, pode-se
    fazer uso das mesmas queries em JS, ao contrário das chamadas feitas a partir do driver de um banco, que ao maigrarem para outro, 
    provavelmente terão de ser rescritas, pois sintaxe muda. Aqui usaremos o KNEX.JS e o driver de acordo com o banco de dados SQLite
        exemplo de chamada: table('users').select('*')
*/