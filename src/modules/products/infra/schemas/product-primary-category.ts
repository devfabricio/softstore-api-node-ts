import { Document, Schema, model } from 'mongoose'

export interface IProductPrimaryCategoryModel {
  name: string
  slug: string
}

export interface IResponseProductPrimaryCategoryModel extends IProductPrimaryCategoryModel {
  _id: string
}

export interface IProductPrimaryCategoryDocument extends IProductPrimaryCategoryModel, Document {}

const ProductPrimaryCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  }
})

export default model<IProductPrimaryCategoryDocument>('ProductPrimaryCategory', ProductPrimaryCategorySchema)
