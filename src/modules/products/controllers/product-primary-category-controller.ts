import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { IController } from '@modules/users/protocols/i-controller'
import CreateProductPrimaryCategoryService from '@modules/products/services/create-product-primary-category-service'

export default class ProductPrimaryCategoryController implements IController {
  async create (request: Request, response: Response): Promise<Response> {
    const createProductPrimaryCategoryService = container.resolve(CreateProductPrimaryCategoryService)
    const productPrimaryCategory = await createProductPrimaryCategoryService.execute(request.body)
    return response.status(201).json(productPrimaryCategory)
  }
}
