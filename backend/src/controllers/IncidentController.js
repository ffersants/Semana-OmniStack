const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
        //authorization remete ao id da ong que gerou o incident
        //tal informação encontra-se no cabeçalho da requisição
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title, description, value, ong_id
        })
        //retorna ao frontend o número do ticket criado
        return response.json({ id })
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        //incidente = [ { ong_id: 'valorRandomico' } ]
        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first()//first faz com que o único elemento retornado não venha em arrray
        //se o ong_id daquele incident for diferente do ong_id
        //que está mandando a requisição delete, retorne 401
        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    },

    async list(request, response) {
        const { page = 1 } = request.query;

        const [count] = await connection('incidents').count()
        const incidents = await connection('incidents').select('*')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf'
            ]);
        //passa o total de incidents
        response.header('X-Total-Count', count['count(*)'])
        return response.json({ incidents })
    }
}