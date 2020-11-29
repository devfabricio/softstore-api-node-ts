import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeCreateCategoryService, makeShowCategoryListService, makeDeleteCategoryService, makeUpdateCategoryService } from '@modules/products/factories'

export default class CategoryController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const showCategoryListService = makeShowCategoryListService()
    const categoryList = await showCategoryListService.execute()
    return response.status(200).json(categoryList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createCategoryService = makeCreateCategoryService()
    const category = await createCategoryService.execute(request.body)
    return response.status(201).json(category)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateCategoryService = makeUpdateCategoryService()
    const category = await updateCategoryService.execute(request.body)
    return response.status(200).json(category)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteCategoryService = makeDeleteCategoryService()
    await deleteCategoryService.execute(id)
    return response.status(204).json()
  }
}
