import { Document, Schema, model } from 'mongoose'
import { IResponseUserModel } from '@modules/users/infra/schemas/user'
import { IProductResponse } from '@modules/products/infra/schemas/product'

export interface ICartItemModel {
  user: string | IResponseUserModel
  product: string | IProductResponse
  quantity: number
}

export interface ICartItemResponse extends ICartItemModel {
  _id: string
}

export interface ICartItemDocument extends ICartItemModel, Document {}

const CartItemSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
}, { timestamps: true })

export default model<ICartItemDocument>('CartItem', CartItemSchema)
