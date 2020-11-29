import { IController } from '@shared/protocols/i-controller'
import { Request, Response } from 'express'
import { makeAddProductQuantityInCategory } from '@modules/products/factories'

export default class AddProductQuantityInCategoryController implements IController {
  async update (request: Request, response: Response): Promise<Response> {
    const addProductQuantityInCategory = makeAddProductQuantityInCategory()
    const category = await addProductQuantityInCategory.execute(request.body)
    return response.status(200).json(category)
  }
}
