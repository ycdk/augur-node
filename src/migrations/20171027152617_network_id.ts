import * as Knex from "knex";

exports.up = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTableIfExists("network_id").then( (): PromiseLike<any> => {
    return knex.schema.createTable("network_id", (table: Knex.CreateTableBuilder): void => {
      table.string("networkID");
      table.dateTime("firstLaunched").defaultTo(knex.fn.now()).notNullable();
      table.dateTime("lastLaunched").defaultTo(knex.fn.now()).notNullable();
    });
  });
};

exports.down = async (knex: Knex): Promise<any> => {
  return knex.schema.dropTableIfExists("network_id");
};
