import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateCustomizedImageGroupService, makeDeleteCustomizedImageGroupService,
  makeListCustomizedImageGroupService, makeShowCustomizedImageGroupService,
  makeUpdateCustomizedImageGroupService
} from '@modules/customized-image/factories/customized-image-group'

export default class CustomizedImageGroupController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listCustomizedImageGroupService = makeListCustomizedImageGroupService()
    const customizedImageGroupList = await listCustomizedImageGroupService.execute()
    return response.status(200).json(customizedImageGroupList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createCustomizedImageGroupService = makeCreateCustomizedImageGroupService()
    const customizedImageGroup = await createCustomizedImageGroupService.execute(request.body)
    return response.status(201).json(customizedImageGroup)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateCustomizedImageGroupService = makeUpdateCustomizedImageGroupService()
    await updateCustomizedImageGroupService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showCustomizedImageGroupService = makeShowCustomizedImageGroupService()
    const id = request.params.id
    const customizedImageGroup = await showCustomizedImageGroupService.execute({ _id: id })
    return response.status(200).json(customizedImageGroup)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteCustomizedImageGroupService = makeDeleteCustomizedImageGroupService()
    await deleteCustomizedImageGroupService.execute(id)
    return response.status(204).json()
  }
}
