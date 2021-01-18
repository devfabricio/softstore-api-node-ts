import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreateColorService, makeDeleteColorService,
  makeListColorService,
  makeShowColorService,
  makeUpdateColorService
} from '@modules/products/factories/color'

export default class ColorController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listColorService = makeListColorService()
    const colorList = await listColorService.execute()
    return response.status(200).json(colorList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createColorService = makeCreateColorService()
    const color = await createColorService.execute(request.body)
    return response.status(201).json(color)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateColorService = makeUpdateColorService()
    await updateColorService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showColorService = makeShowColorService()
    const id = request.params.id
    const color = await showColorService.execute({ _id: id })
    return response.status(200).json(color)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteColorService = makeDeleteColorService()
    await deleteColorService.execute(id)
    return response.status(204).json()
  }
}
