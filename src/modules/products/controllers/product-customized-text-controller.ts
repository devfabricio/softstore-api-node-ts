import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateProductCustomizedTextService, makeDeleteProductCustomizedTextService,
  makeListProductCustomizedTextService, makeShowProductCustomizedTextService, makeUpdateProductCustomizedTextService
} from '@modules/products/factories/product-customized-text'

export default class ProductCustomizedTextController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listProductCustomizedTextService = makeListProductCustomizedTextService()
    const productId = request.params.productId
    const productCustomizedTextList = await listProductCustomizedTextService.execute({ productId })
    return response.status(200).json(productCustomizedTextList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createProductCustomizedTextService = makeCreateProductCustomizedTextService()
    const productCustomizedText = await createProductCustomizedTextService.execute(request.body)
    return response.status(201).json(productCustomizedText)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateProductCustomizedTextService = makeUpdateProductCustomizedTextService()
    await updateProductCustomizedTextService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showProductCustomizedTextService = makeShowProductCustomizedTextService()
    const id = request.params.id
    const productCustomizedText = await showProductCustomizedTextService.execute({ _id: id })
    return response.status(200).json(productCustomizedText)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteProductCustomizedTextService = makeDeleteProductCustomizedTextService()
    await deleteProductCustomizedTextService.execute(id)
    return response.status(204).json()
  }
}
