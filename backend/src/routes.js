//importa as funcionalidades do micro framework express
const express = require('express');
//onst OngController = require('')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

//cria a rota para a página principal da aplicação (URL raiz)
//o método post é utilizado no login para indicar que desejo criar uma sessão
routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.list)
routes.delete('/incidents/:id', IncidentController.delete)

routes.get('/profile', ProfileController.index);
//exporta a variável
module.exports = routes;