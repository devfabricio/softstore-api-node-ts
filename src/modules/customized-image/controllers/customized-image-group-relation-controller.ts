import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateCustomizedImageGroupRelationService, makeDeleteCustomizedImageGroupRelationService,
  makeListCustomizedImageGroupRelationService,
  makeShowCustomizedImageGroupRelationService,
  makeUpdateCustomizedImageGroupRelationService
} from '@modules/customized-image/factories/customized-image-group-relation'

export default class CustomizedImageGroupRelationController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const groupId = request.params.groupId
    const listCustomizedImageGroupRelationService = makeListCustomizedImageGroupRelationService()
    const customizedImageGroupRelationList = await listCustomizedImageGroupRelationService.execute(groupId)
    return response.status(200).json(customizedImageGroupRelationList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createCustomizedImageGroupRelationService = makeCreateCustomizedImageGroupRelationService()
    const customizedImageGroupRelation = await createCustomizedImageGroupRelationService.execute(request.body)
    return response.status(201).json(customizedImageGroupRelation)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateCustomizedImageGroupRelationService = makeUpdateCustomizedImageGroupRelationService()
    await updateCustomizedImageGroupRelationService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showCustomizedImageGroupRelationService = makeShowCustomizedImageGroupRelationService()
    const id = request.params.id
    const customizedImageGroupRelation = await showCustomizedImageGroupRelationService.execute({ _id: id })
    return response.status(200).json(customizedImageGroupRelation)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteCustomizedImageGroupRelationService = makeDeleteCustomizedImageGroupRelationService()
    await deleteCustomizedImageGroupRelationService.execute(id)
    return response.status(204).json()
  }
}
