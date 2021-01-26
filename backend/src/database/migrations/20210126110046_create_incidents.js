
exports.up = function (knex) {
    return knex.schema.createTable('incidents', function (table) {
        //primary key
        table.increments();

        //campos da tabela
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        /*relacionamento do incidente com a ong, toda vez que
        ong_id estiver preenchido, ele precisa constar na coluna id da tabela ong*/
        table.string('ong_id').notNullable();//relacionamento da ong com um incident

        table.foreign('ong_id').references('id').inTable('ongs')
        /*chave estrangeira
        a coluna ong_id
        referencia à coluna id
        na table ongs*/
    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('incidents')
};
