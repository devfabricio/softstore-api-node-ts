import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import { makeListAppDataService } from '@modules/app-data/factories/make-list-app-data-service'

export default class AWSDataController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listAppDataService = makeListAppDataService()
    const appDataList = await listAppDataService.execute()
    return response.status(200).json(appDataList)
  }
}
