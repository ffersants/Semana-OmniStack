//importa as funcionalidades do micro framework express
const express = require(`express`);
const routes = require('./routes')

//instancia a aplicação
const app = express();

//formata o corpo das requisições em objeto JSON entendível pelo javascript
app.use(express.json())
app.use(routes)




//manda a aplicação escutar as requisições na porta 3333
app.listen(3333)