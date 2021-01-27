import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateProductCategoryService, makeDeleteProductCategoryService,
  makeListProductCategoryService, makeShowProductCategoryService, makeUpdateProductCategoryService
} from '@modules/products/factories/product-category'

export default class ProductCategoryController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listProductCategoryService = makeListProductCategoryService()
    const productId = request.params.productId
    const productCategoryList = await listProductCategoryService.execute({ productId })
    return response.status(200).json(productCategoryList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createProductCategoryService = makeCreateProductCategoryService()
    const productCategory = await createProductCategoryService.execute(request.body)
    return response.status(201).json(productCategory)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateProductCategoryService = makeUpdateProductCategoryService()
    await updateProductCategoryService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showProductCategoryService = makeShowProductCategoryService()
    const id = request.params.id
    const productCategory = await showProductCategoryService.execute({ _id: id })
    return response.status(200).json(productCategory)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteProductCategoryService = makeDeleteProductCategoryService()
    await deleteProductCategoryService.execute(id)
    return response.status(204).json()
  }
}
