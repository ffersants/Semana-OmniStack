//importa as funcionalidades do micro framework express
const express = require(`express`);
//instancia a aplicação
const app = express();

//cria a rota para a página principal da aplicação (URL raiz)
app.get('/', (request, response) => {
    return response.send('Hello world')
})

//manda a aplicação escutar as requisições na porta 3333
app.listen(3333)