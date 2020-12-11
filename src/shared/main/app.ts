import express, { NextFunction, Request, Response } from 'express'
import { createServer, Server } from 'http'
import * as SocketIO from 'socket.io'
import routes from '@shared/main/routes'
import cors from 'cors'
import AppError from '@shared/errors/app-error'
import { connectDB } from '@shared/infra/database'

class App {
  public app: express.Application
  public server: Server
  private io: SocketIO.Server
  public PORT: number = 3333

  constructor () {
    this.config()
    this.routes()
    this.setServerError()
    this.sockets()
    this.listen()
  }

  routes (): void {
    this.app.use(routes)
  }

  private config (): void {
    this.app = express()
    this.app.use(cors())
    this.app.use(express.json())
  }

  private setServerError (): void {
    this.app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
      if (err instanceof AppError) {
        return res.status(err.statusCode).json({
          status: 'error',
          message: err.message
        })
      }
      return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      })
    })
  }

  private sockets (): void {
    this.server = createServer(this.app)
    this.io = new SocketIO.Server(this.server, {
      cors: {
        origin: 'http://localhost:3000'
      }
    })
  }

  private listen (): void {
    connectDB().then(() => {
      this.io.on('connection', (socket: any) => {
        console.log('a user connected')

        socket.on('disconnect', () => {
          console.log('user disconnected')
        })
      })
    }).catch((error) => {
      console.log(error)
    })
  }

  getIO (): SocketIO.Server {
    return this.io
  }
}

export default new App()
