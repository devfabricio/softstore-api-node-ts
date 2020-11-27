import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeCreateProductPrimaryCategoryService } from '@modules/products/factories'
import { makeShowProductPrimaryCategoryListService } from '@modules/products/factories/make-show-product-primary-category'

export default class ProductPrimaryCategoryController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const showProductPrimaryCategoryListService = makeShowProductPrimaryCategoryListService()
    const productPrimaryCategoryList = await showProductPrimaryCategoryListService.execute()
    return response.status(200).json(productPrimaryCategoryList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createProductPrimaryCategoryService = makeCreateProductPrimaryCategoryService()
    const productPrimaryCategory = await createProductPrimaryCategoryService.execute(request.body)
    return response.status(201).json(productPrimaryCategory)
  }
}
