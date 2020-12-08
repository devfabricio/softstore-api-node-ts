import { ICartItemModel, ICartItemResponse } from '@modules/cart-items/infra/schemas/cart-item'

export default interface ICartItemRepository {
  create(data: ICartItemModel): Promise<ICartItemResponse>
  findByUser(user: string): Promise<ICartItemResponse[]>
  findById(id: string): Promise<ICartItemResponse>
  delete (id: string): Promise<boolean>
  save (product: ICartItemResponse): Promise<ICartItemResponse>
}
