import { createConnection } from 'typeorm'

createConnection({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'soft-store-db'
}).then(r => console.log(r))
  .catch(error => console.log(error))
