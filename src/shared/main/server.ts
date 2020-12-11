import 'express-async-errors'
import app from './app'

app.server.listen(app.PORT, function () {
  console.log(`server running in" + ${app.PORT}`)
})
