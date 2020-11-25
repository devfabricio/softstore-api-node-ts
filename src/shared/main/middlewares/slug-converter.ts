import { NextFunction, Request, Response } from 'express'

export const slugConverter = (request: Request, response: Response, next: NextFunction): void => {
  let fieldName: string
  const fields = ['name', 'title']
  for (const field of fields) {
    if (request.body[field]) {
      fieldName = field
    }
  }
  if (!fieldName) {
    return next()
  }
  const text = request.body[fieldName].trim()
  const removedAccents = text.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const removedSpecialCharacters = removedAccents.replace(/[^\w\s]/gi, '')
  const slug = removedSpecialCharacters.replace(' ', '-').toLowerCase()
  request.body[fieldName] = text
  request.body.slug = slug
  return next()
}
