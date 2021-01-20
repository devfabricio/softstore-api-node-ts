import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateCustomizedImageService, makeDeleteCustomizedImageService,
  makeListCustomizedImageService, makeShowCustomizedImageService
} from '@modules/customized-image/factories/customized-image'

export default class CustomizedImageController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listCustomizedImageService = makeListCustomizedImageService()
    const customizedImageList = await listCustomizedImageService.execute()
    return response.status(200).json(customizedImageList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createCustomizedImageService = makeCreateCustomizedImageService()
    const customizedImage = await createCustomizedImageService.execute(request.body)
    return response.status(201).json(customizedImage)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showCustomizedImageService = makeShowCustomizedImageService()
    const id = request.params.id
    const customizedImage = await showCustomizedImageService.execute({ _id: id })
    return response.status(200).json(customizedImage)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteCustomizedImageService = makeDeleteCustomizedImageService()
    await deleteCustomizedImageService.execute(id)
    return response.status(204).json()
  }
}
