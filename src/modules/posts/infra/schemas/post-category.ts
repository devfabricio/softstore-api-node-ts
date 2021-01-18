import { Document, Schema, model } from 'mongoose'

export interface IPostCategoryModel {
  name: string
  slug: string
  postCounter: number
}

export interface IPostCategoryResponse extends IPostCategoryModel {
  _id: string
}

export interface IPostCategoryDocument extends IPostCategoryModel, Document {}

const PostCategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  postCounter: {
    type: Number,
    required: true,
    default: 0
  }
})

export default model<IPostCategoryDocument>('PostCategory', PostCategorySchema)
