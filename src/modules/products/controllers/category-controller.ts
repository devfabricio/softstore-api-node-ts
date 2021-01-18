import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateCategoryService,
  makeShowCategoryListService,
  makeDeleteCategoryService,
  makeUpdateCategoryService
} from '@modules/products/factories'
import { makeShowCategoryService } from '@modules/products/factories/category/make-show-category-service'

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

  async show (request: Request, response: Response): Promise<Response> {
    const showCategoryService = makeShowCategoryService()
    const id = request.params.id
    const slug = request.params.slug
    const category = await showCategoryService.execute({ _id: id, slug })
    return response.status(200).json(category)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteCategoryService = makeDeleteCategoryService()
    await deleteCategoryService.execute(id)
    return response.status(204).json()
  }
}
