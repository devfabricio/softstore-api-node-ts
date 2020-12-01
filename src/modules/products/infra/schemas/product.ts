import { Document, Schema, model } from 'mongoose'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'

export interface IProductModel {
  name: string
  description: string
  thumbImg: string
  slug: string
  category: string | ICategoryResponse
  price: number
  oldPrice?: number
}

export interface IProductResponse extends IProductModel {
  _id: string
}

export interface IProductDocument extends IProductModel, Document {}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbImg: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  photos: {
    type: String,
    required: false
  },
  price: {
    type: Number,
    required: true
  },
  oldPrice: {
    type: Number,
    required: false
  }
}, { timestamps: true })

export default model<IProductDocument>('Product', ProductSchema)
