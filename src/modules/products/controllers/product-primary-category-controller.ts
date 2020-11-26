import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeCreateProductPrimaryCategoryService } from '@modules/products/factories'

export default class ProductPrimaryCategoryController implements IController {
  async create (request: Request, response: Response): Promise<Response> {
    const createProductPrimaryCategoryService = makeCreateProductPrimaryCategoryService()
    const productPrimaryCategory = await createProductPrimaryCategoryService.execute(request.body)
    return response.status(201).json(productPrimaryCategory)
  }
}
