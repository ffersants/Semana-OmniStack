const express = require('express');

const routes = require('./routes');
/*pega a variável routes exportada pelo arquivo routes.js
importante fazer uso do ./ para evidenciar que trata-se de um arquivo
*/
const app = express();

app.use(express.json());

app.use(routes);


app.listen(3333);

//npm start to start the server