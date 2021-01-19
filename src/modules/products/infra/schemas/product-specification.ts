import { Document, Schema, model } from 'mongoose'
import { IProductResponse } from '@modules/products/infra/schemas/product'

export interface IProductSpecificationModel {
  product: string | IProductResponse
  name: string
  value: string
}

export interface IProductSpecificationResponse extends IProductSpecificationModel {
  _id: string
}

export interface IProductSpecificationDocument extends IProductSpecificationModel, Document {}

const ProductSpecification = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default model<IProductSpecificationDocument>('ProductSpecification', ProductSpecification)
