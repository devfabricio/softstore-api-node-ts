import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateProductService,
  makeListProductService,
  makeShowProductService,
  makeUpdateProductService
} from '@modules/products/factories'

export default class ProductController implements IController {
  async create (request: Request, response: Response): Promise<Response> {
    const createProductService = makeCreateProductService()
    const product = await createProductService.execute(request.body)
    return response.status(201).json(product)
  }

  async index (request: Request, response: Response): Promise<Response> {
    const showProductListService = makeListProductService()
    const filter: any = {}
    const category = request.params.category
    if (category) {
      filter.category = category
    }
    const productList = await showProductListService.execute(filter)
    return response.status(200).json(productList)
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showProductService = makeShowProductService()
    const id = request.params.id
    const slug = request.params.slug
    const product = await showProductService.execute({ _id: id, slug })
    return response.status(200).json(product)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateProductService = makeUpdateProductService()
    const product = await updateProductService.execute(request.body)
    return response.status(200).json(product)
  }
}
