import * as SocketIO from 'socket.io'
import AppError from '@shared/errors/app-error'
import { Server } from 'http'

let io: SocketIO.Server

export const socketio = (httpServer: Server): SocketIO.Server => {
  io = new SocketIO.Server(httpServer, {
    cors: {
      origin: '*'
    }
  })
  return io
}

export const getIO = (): SocketIO.Server => {
  if (!io) {
    throw new AppError('SocketIO is not initialized')
  } else {
    return io
  }
}
