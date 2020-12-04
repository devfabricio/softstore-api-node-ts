import { Model } from 'mongoose'
import ICartItemRepository from '@modules/cart-items/infra/repositories/protocols/i-cart-item-repository'
import CartItemSchema, {
  ICartItemDocument,
  ICartItemModel,
  ICartItemResponse
} from '@modules/cart-items/infra/schemas/cart-item'

export default class CartItemRepository implements ICartItemRepository {
  private readonly repository: Model<ICartItemDocument>

  constructor () {
    this.repository = CartItemSchema
  }

  async create (data: ICartItemModel): Promise<ICartItemResponse> {
    const product = await this.repository.create(data)
    return await product.save()
  }

  async findByUser (user: string): Promise<ICartItemResponse[]> {
    return this.repository.find({ user: user }).populate('product')
  }

  async save (product: ICartItemResponse): Promise<ICartItemResponse> {
    return this.repository.updateOne({ _id: product._id },{ $set: { ...product } })
  }

  async delete (id: string): Promise<boolean> {
    await this.repository.findByIdAndDelete(id)
    return true
  }
}
