import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreatePostCategoryService,
  makeShowPostCategoryListService,
  makeShowPostCategoryService,
  makeDeletePostCategoryService,
  makeUpdatePostCategoryService
} from '@modules/posts/factories/post-category'

export default class PostCategoryController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const showCategoryListService = makeShowPostCategoryListService()
    const categoryList = await showCategoryListService.execute()
    return response.status(200).json(categoryList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createCategoryService = makeCreatePostCategoryService()
    const category = await createCategoryService.execute(request.body)
    return response.status(201).json(category)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateCategoryService = makeUpdatePostCategoryService()
    const category = await updateCategoryService.execute(request.body)
    return response.status(200).json(category)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showCategoryService = makeShowPostCategoryService()
    const id = request.params.id
    const slug = request.params.slug
    const category = await showCategoryService.execute({ _id: id, slug })
    return response.status(200).json(category)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteCategoryService = makeDeletePostCategoryService()
    await deleteCategoryService.execute(id)
    return response.status(204).json()
  }
}
