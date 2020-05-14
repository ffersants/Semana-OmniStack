
exports.up = function(knex) {
  //criando tablea
   return knex.schema.createTable('ongs', function(table) {
        table.string('id').primary();
        table.string('name').notNullable();//um nome da ong é algo obrigatório a ser preenchido
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();//tamanho do texto a ser armazenado possui apenas 2 caracteres
    });
};

exports.down = function(knex) {
 return knex.schema.dropTable('ongs')
};

/*
método up: o que eu quero que seja feito
método down: dada alguma situação, o que eu quero que seja desfeito
*/
