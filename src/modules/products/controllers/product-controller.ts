import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeCreateProductService, makeShowProductListService } from '@modules/products/factories'

export default class ProductController implements IController {
  async create (request: Request, response: Response): Promise<Response> {
    const createProductService = makeCreateProductService()
    const product = await createProductService.execute(request.body)
    return response.status(201).json(product)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showProductListService = makeShowProductListService()
    const productList = await showProductListService.execute()
    return response.status(200).json(productList)
  }
}
