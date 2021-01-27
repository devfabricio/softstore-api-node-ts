import { Document, Schema, model } from 'mongoose'
import { IProductResponse } from '@modules/products/infra/schemas/product'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'

export interface IProductCategoryModel {
  product: string | IProductResponse
  category: string | ICategoryResponse
}

export interface IProductCategoryResponse extends IProductCategoryModel {
  _id: string
}

export interface IProductCategoryDocument extends IProductCategoryModel, Document {}

const ProductCategorySchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
}, { timestamps: true })

export default model<IProductCategoryDocument>('ProductCategory', ProductCategorySchema)
