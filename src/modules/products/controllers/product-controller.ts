import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { IController } from '@modules/users/protocols/i-controller'
import CreateProductService from '@modules/products/services/create-product-service'
import ShowProductListService from '@modules/products/services/show-product-list-service'

export default class ProductController implements IController {
  async create (request: Request, response: Response): Promise<Response> {
    const createProductService = container.resolve(CreateProductService)
    const product = await createProductService.execute(request.body)
    return response.status(201).json(product)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showProductListService = container.resolve(ShowProductListService)
    const productList = await showProductListService.execute()
    return response.status(200).json(productList)
  }
}
