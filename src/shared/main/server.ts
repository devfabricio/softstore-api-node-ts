import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import routes from './routes'
import '../infra/database'
import AppError from '../errors/app-error'

import '@shared/container'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }

  console.log(err)

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

app.listen(3333, () => {
  console.log('Server started on port 333')
})
