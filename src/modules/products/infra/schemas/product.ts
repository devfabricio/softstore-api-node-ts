import { Document, Schema, model } from 'mongoose'

export interface IProductModel {
  name: string
  description: string
  thumbImg: string
  slug: string
  productPrimaryCategory: string
  productSecundaryCategory?: string
  price: number
  oldPrice?: number
}

export interface IResponseProductModel extends IProductModel {
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
  productPrimaryCategory: {
    type: Schema.Types.ObjectId,
    ref: 'ProductPrimaryCategory',
    required: true
  },
  productSecundaryCategory: {
    type: String,
    required: false
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
