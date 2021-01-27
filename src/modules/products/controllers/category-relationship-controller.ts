import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateCategoryRelationshipService, makeDeleteCategoryRelationshipService,
  makeListCategoryRelationshipService, makeShowCategoryRelationshipService, makeUpdateCategoryRelationshipService
} from '@modules/products/factories/category-relationship'

export default class CategoryRelationshipController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listCategoryRelationshipService = makeListCategoryRelationshipService()
    const categoryRelationshipList = await listCategoryRelationshipService.execute()
    return response.status(200).json(categoryRelationshipList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createCategoryRelationshipService = makeCreateCategoryRelationshipService()
    const categoryRelationship = await createCategoryRelationshipService.execute(request.body)
    return response.status(201).json(categoryRelationship)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateCategoryRelationshipService = makeUpdateCategoryRelationshipService()
    await updateCategoryRelationshipService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showCategoryRelationshipService = makeShowCategoryRelationshipService()
    const id = request.params.id
    const categoryRelationship = await showCategoryRelationshipService.execute({ _id: id })
    return response.status(200).json(categoryRelationship)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteCategoryRelationshipService = makeDeleteCategoryRelationshipService()
    await deleteCategoryRelationshipService.execute(id)
    return response.status(204).json()
  }
}
