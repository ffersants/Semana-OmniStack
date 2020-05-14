const connection = require('../database/connection');

module.exports = {

    async index(request, response) {
        const incidents = await connection('incidents').select('*');
        
        return response.json(incidents)
    },

    async create(request,response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });
        return response.json({ id })
    },

    async delete(request,response) {
        //COMPARA O ID DA ONG LOGADA |<-COM ->| O ID QUE CONSTA NO INCIDENT QUE A MESMA QUER APAGAR 
        const { id } = request.params//pega o id do post a ser deletado, esse id consta na url, portanto este é um método get route params
        const ong_id = request.headers.authorization//o id da ong consta na header da url também, ou seja, id da ONG LOGADA que está requisitando o delete
        //COMPARA O ID DA ONG LOGADA |<-COM ->| O ID QUE CONSTA NO INCIDENT QUE A MESMA QUER APAGAR

        const incident = await connection('incidents')
        //na tabela incidents, procurar pelo id que consta no request.params(url), e pegar o id da ong     
           .where('id', id)//busca na banco um incidente que tenha o id = ao id presente no request.params
            .select('ong_id')//na tabela do incidente o id iguqal ao que consta no request.params, selecionar a coluna ong_id, id da ong propriamente dito
        //na tabela incidents, procurar pelo id que consta no request.params(url), e pegar o id da ong

        .first()
//se o ong_id do incident identificado pelo id do request.params for diferente do ong_id 
//presente no header da url de request do delete do incident, retornar 401 - error 
            if (incident.ong_id != ong_id) {
                return response.status(401).json({error: 'Operation not permited'})
                console.error('Não ós')
            }
            
            await connection('incidents').where('id',id).delete();
            
            return response.status(204).send()
//O código de resposta HTTP de status de sucesso 204 No Content indica que a solicitação foi bem sucedida e o cliente não precisa sair da página atual.
        }
}