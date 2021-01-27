import { IProductCustomizedTextModel, IProductCustomizedTextResponse } from '@modules/products/infra/schemas/product-customized-text'

export default interface IProductCustomizedTextRepository {
  create(data: IProductCustomizedTextModel): Promise<IProductCustomizedTextResponse>
  find(): Promise<IProductCustomizedTextResponse[]>
  findById(id: string): Promise<IProductCustomizedTextResponse>
  findByProduct(productId: string): Promise<IProductCustomizedTextResponse[]>
  delete (id: string): Promise<boolean>
  save (data: IProductCustomizedTextModel): Promise<IProductCustomizedTextResponse>
}
