import 'express-async-errors'
import app from './app'
import 'dotenv/config'

app.server.listen(app.PORT, function () {
  console.log(`server running in" + ${app.PORT}`)
})
