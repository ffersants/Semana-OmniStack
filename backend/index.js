//importa as funcionalidades do micro framework express
const express = require(`express`);
//instancia a aplicação
const app = express();
//formata o corpo das requisições em objeto JSON entendível pelo javascript
app.use(express.json())
//cria a rota para a página principal da aplicação (URL raiz)
app.get('/', (request, response) => {
    return response.send('Hello world! Página da url raiz')
})

app.post('/users', (request, response) => {
    const body = request.body;
    console.log(body)
})

//manda a aplicação escutar as requisições na porta 3333
app.listen(3333)