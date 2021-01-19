import { Document, Schema, model } from 'mongoose'
import { IProductResponse } from '@modules/products/infra/schemas/product'

export interface IProductPhotoModel {
  url: string
  width: number
  height: number
  product: string | IProductResponse
}

export interface IProductPhotoResponse extends IProductPhotoModel {
  _id: string
}

export interface IProductPhotoDocument extends IProductPhotoModel, Document {}

const ProductPhotoSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  }
}, { timestamps: true })

export default model<IProductPhotoDocument>('ProductPhoto', ProductPhotoSchema)
