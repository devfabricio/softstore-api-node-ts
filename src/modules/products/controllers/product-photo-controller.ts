import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateProductPhotoService, makeDeleteProductPhotoService,
  makeListProductPhotoService, makeShowProductPhotoService,
  makeUpdateProductPhotoService
} from '@modules/products/factories/product-photo'

export default class ProductPhotoController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const productId = request.params.productId
    const listProductPhotoService = makeListProductPhotoService()
    const productPhotoList = await listProductPhotoService.execute(productId)
    return response.status(200).json(productPhotoList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createProductPhotoService = makeCreateProductPhotoService()
    const productPhoto = await createProductPhotoService.execute(request.body)
    return response.status(201).json(productPhoto)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateProductPhotoService = makeUpdateProductPhotoService()
    await updateProductPhotoService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showProductPhotoService = makeShowProductPhotoService()
    const id = request.params.id
    const productPhoto = await showProductPhotoService.execute({ _id: id })
    return response.status(200).json(productPhoto)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteProductPhotoService = makeDeleteProductPhotoService()
    await deleteProductPhotoService.execute(id)
    return response.status(204).json()
  }
}
