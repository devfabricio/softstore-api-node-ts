import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateProductSpecificationService, makeDeleteProductSpecificationService,
  makeListProductSpecificationService, makeUpdateProductSpecificationService
} from '@modules/products/factories/product-specification'

export default class ProductSpecificationController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listProductSpecificationService = makeListProductSpecificationService()
    const productId = request.params.productId
    const productSpecificationList = await listProductSpecificationService.execute(productId)
    return response.status(200).json(productSpecificationList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createProductSpecificationService = makeCreateProductSpecificationService()
    const productSpecification = await createProductSpecificationService.execute(request.body)
    return response.status(201).json(productSpecification)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateProductSpecificationService = makeUpdateProductSpecificationService()
    await updateProductSpecificationService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showProductSpecificationService = makeUpdateProductSpecificationService()
    const id = request.params.id
    const productSpecification = await showProductSpecificationService.execute({ _id: id })
    return response.status(200).json(productSpecification)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteProductSpecificationService = makeDeleteProductSpecificationService()
    await deleteProductSpecificationService.execute(id)
    return response.status(204).json()
  }
}
