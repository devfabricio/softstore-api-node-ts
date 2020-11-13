import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { authConfig } from '../config/auth'

export const isAuth = (request: Request, response: Response, next: NextFunction): void => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new Error('Not Authorized')
  }

  const [, token] = authHeader.split(' ')
  try {
    const decoded = verify(token, authConfig.jwt.secret)
    console.log(decoded)
    return next()
  } catch (error) {
    throw new Error('Not Authorized')
  }
}
