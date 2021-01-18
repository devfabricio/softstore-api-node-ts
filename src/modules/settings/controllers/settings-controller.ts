import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeUpdateOptionService } from '@modules/settings/factories/make-update-option-service'
import { makeCreateDefaultOptionsService } from '@modules/settings/factories/make-create-default-options-service'
import { makeListOptionsService } from '@modules/settings/factories/make-list-options-service'

export default class SettingsController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listOptionsService = makeListOptionsService()
    const optionList = await listOptionsService.execute()
    return response.status(200).json(optionList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createDefaultOptionsService = makeCreateDefaultOptionsService()
    const options = await createDefaultOptionsService.execute()
    return response.status(201).json(options)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updateOptionService = makeUpdateOptionService()
    await updateOptionService.execute(request.body)
    return response.status(206).json({})
  }
}
