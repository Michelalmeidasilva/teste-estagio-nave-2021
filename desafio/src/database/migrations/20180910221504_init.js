export const up = knex =>
  knex.schema
    .raw(
      `CREATE OR REPLACE FUNCTION update_updated_at_column() 
          RETURNS TRIGGER AS $$
          BEGIN 
            NEW.updated_at = now(); 
            RETURN NEW; 
          END;
          $$ language 'plpgsql';`
    )
    .raw('CREATE EXTENSION IF NOT EXISTS CITEXT')


export const down = knex => {
  return;
}

