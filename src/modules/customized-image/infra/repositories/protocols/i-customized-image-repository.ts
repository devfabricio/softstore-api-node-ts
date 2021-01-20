import { ICustomizedImageModel, ICustomizedImageResponse } from '@modules/customized-image/infra/schemas/customized-image'

export default interface ICustomizedImageRepository {
  create(data: ICustomizedImageModel): Promise<ICustomizedImageResponse>
  find(): Promise<ICustomizedImageResponse[]>
  findById(id: string): Promise<ICustomizedImageResponse>
  delete (id: string): Promise<boolean>
  save (data: ICustomizedImageModel): Promise<ICustomizedImageResponse>
}
