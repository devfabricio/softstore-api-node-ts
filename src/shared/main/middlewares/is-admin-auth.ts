import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { authConfig } from '@config/auth'
import AppError from '@shared/errors/app-error'

export const isAdminAuth = (request: Request, response: Response, next: NextFunction): void => {
  const authHeader = request.headers.authorization
  if (!authHeader) {
    throw new AppError('Not Authorized', 401)
  }

  const [, token] = authHeader.split(' ')
  try {
    verify(token, authConfig.jwt.admin_secret)
    return next()
  } catch (error) {
    throw new AppError('Not Authorized', 401)
  }
}
