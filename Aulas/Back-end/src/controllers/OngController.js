const crypto = require('crypto')//pacote que vem junto com o node

const connection = require('../database/connection')//conexão com o banco de dados

module.exports = {
    // listagem das ongs cadastradas
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
        },
        
    // criar ong
    async create(request, response) {
        //os dados json da request são armazenados respectivamente na variável que condiz com cada dado
    const {name, email, whatsapp, city, uf} = request.body;
    //gera texto aleatório com 4 bytes de caracteres hexadecimais aleatórios e converte eles em string. Consta na documentação do node
        const id = crypto.randomBytes(4).toString('HEX') //LINHA QUE GERA O ID QUE TEMOS NO BANCO DE DADOS
    
    /*
    nomeDoArquivoDeConexãoCmOBanco('nomeDaTabela').método({
        colunas,
        que quero,
        inserir dados,
    })
    */
    
    //daqui em diante o node aguarda o insert concluir, para só então retorna o id da ong recém-cadastrada
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })
    
    
    //uma ong, concluindo seu cadastro, terá como resposta uma id que garante seu login na página
        
        return response.json({id});
      }
};