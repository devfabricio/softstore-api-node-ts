import { IColorModel, IColorResponse } from '@modules/products/infra/schemas/color'

export default interface IColorRepository {
  create(data: IColorModel): Promise<IColorResponse>
  find(): Promise<IColorResponse[]>
  findById(id: string): Promise<IColorResponse>
  delete (id: string): Promise<boolean>
  save (data: IColorModel): Promise<IColorResponse>
}
