import { IProductModel } from '@modules/products/infra/schemas/product'

export default interface IProductRepository {
  find(): Promise<IProductModel[]>
  create(data: IProductModel): Promise<IProductModel>
  findByName(name: string): Promise<IProductModel>
}
