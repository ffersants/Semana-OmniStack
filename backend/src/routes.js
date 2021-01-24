//importa as funcionalidades do micro framework express
const express = require('express');

const routes = express.Router()
//cria a rota para a página principal da aplicação (URL raiz)
routes.get('/', (request, response) => {
    return response.send('Hello world! Página da url raiz')
})

routes.post('/users', (request, response) => {
    const body = request.body;
    console.log(body)
})

//exporta a variável
module.exports = routes;