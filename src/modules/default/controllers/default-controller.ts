import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeUpdateDefaultService } from '@modules/default/factories/make-update-default-service'
import { makeCreateDefaultService } from '@modules/default/factories/make-create-default-service'
import { makeListDefaultService } from '@modules/default/factories/make-list-default-service'
import { makeShowDefaultService } from '@modules/default/factories/make-show-default-service'
import { makeDeleteDefaultService } from '@modules/default/factories/make-delete-default-service'

export default class DefaultController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listDefaultService = makeListDefaultService()
    const defaultObjList = await listDefaultService.execute()
    return response.status(200).json(defaultObjList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createDefaultService = makeCreateDefaultService()
    const defaultObj = await createDefaultService.execute(request.body)
    return response.status(201).json(defaultObj)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateDefaultService = makeUpdateDefaultService()
    await updateDefaultService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showDefaultService = makeShowDefaultService()
    const id = request.params.id
    const defaultObj = await showDefaultService.execute({ _id: id })
    return response.status(200).json(defaultObj)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deleteDefaultService = makeDeleteDefaultService()
    await deleteDefaultService.execute(id)
    return response.status(204).json()
  }
}
