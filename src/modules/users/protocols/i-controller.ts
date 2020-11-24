import { Request, Response } from 'express'

export interface IController {
  show? (request: Request, response: Response): Promise<Response>
  create? (request: Request, response: Response): Promise<Response>
  update? (request: Request, response: Response): Promise<Response>
  delete? (request: Request, response: Response): Promise<Response>
  index? (request: Request, response: Response): Promise<Response>
}
