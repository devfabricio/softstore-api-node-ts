import { Document, Schema, model } from 'mongoose'

export interface ICategoryModel {
  name: string
  slug: string
  parent?: string | ICategoryModel
  productCounter: number
}

export interface ICategoryResponse extends ICategoryModel {
  _id: string
}

export interface ICategoryDocument extends ICategoryModel, Document {}

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  },
  productCounter: {
    type: Number,
    required: true,
    default: 0
  }
})

export default model<ICategoryDocument>('Category', CategorySchema)
