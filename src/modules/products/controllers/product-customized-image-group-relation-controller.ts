import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeUpdateProductCustomizedImageGroupRelationService } from '@modules/products/factories/make-update-product-customized-image-group-relation-service'
import { makeCreateProductCustomizedImageGroupRelationService } from '@modules/products/factories/make-create-product-customized-image-group-relation-service'
import { makeListProductCustomizedImageGroupRelationService } from '@modules/products/factories/make-list-product-customized-image-group-relation-service'
import { makeShowProductCustomizedImageGroupRelationService } from '@modules/products/factories/make-show-product-customized-image-group-relation-service'
import { makeDeleteProductCustomizedImageGroupRelationService } from '@modules/products/factories/make-delete-product-customized-image-group-relation-service'

export default class ProductCustomizedImageGroupRelationController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listProductCustomizedImageGroupRelationService = makeListProductCustomizedImageGroupRelationService()
    const productCustomizedImageGroupRelationList = await listProductCustomizedImageGroupRelationService.execute()
    return response.status(200).json(productCustomizedImageGroupRelationList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createProductCustomizedImageGroupRelationService = makeCreateProductCustomizedImageGroupRelationService()
    const productCustomizedImageGroupRelation = await createProductCustomizedImageGroupRelationService.execute(request.body)
    return response.status(201).json(productCustomizedImageGroupRelation)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateProductCustomizedImageGroupRelationService = makeUpdateProductCustomizedImageGroupRelationService()
    await updateProductCustomizedImageGroupRelationService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showProductCustomizedImageGroupRelationService = makeShowProductCustomizedImageGroupRelationService()
    const id = request.params.id
    const productCustomizedImageGroupRelation = await showProductCustomizedImageGroupRelationService.execute({ _id: id })
    return response.status(200).json(productCustomizedImageGroupRelation)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteProductCustomizedImageGroupRelationService = makeDeleteProductCustomizedImageGroupRelationService()
    await deleteProductCustomizedImageGroupRelationService.execute(id)
    return response.status(204).json()
  }
}
