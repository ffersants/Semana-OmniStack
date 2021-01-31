//importa as funcionalidades do micro framework express
const express = require(`express`);
const routes = require('./routes')
const cors = require('cors')
//instancia a aplicação
const app = express();
//permite que todas aplicações possam fazer requisições a esse backend
app.use(cors());

/*
QUANDO FOR PARA PRODUÇÃO
    app.use(cors({
        origin: 'http://meu-front-end.com'
    }));
*/
//formata o corpo das requisições em objeto JSON entendível pelo javascript
app.use(express.json())
app.use(routes)




//manda a aplicação escutar as requisições na porta 3333
app.listen(3333)