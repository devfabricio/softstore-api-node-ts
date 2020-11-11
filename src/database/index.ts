import { createConnection } from 'typeorm'

createConnection({
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'soft-store-db',
  entities: ['./src/models/*.ts']
}).then(r => { if (r.isConnected) console.log('database connected!') })
  .catch(error => console.log(error))
