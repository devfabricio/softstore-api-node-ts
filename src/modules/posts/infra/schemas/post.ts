import { Document, Schema, model } from 'mongoose'
import { IPostCategoryResponse } from '@modules/posts/infra/schemas/post-category'

export interface IPostModel {
  title: string
  text: string
  status: string
  slug: string
  postCategory: string | IPostCategoryResponse
  coverImg: string
}

export interface IPostResponse extends IPostModel {
  _id: string
}

export interface IPostDocument extends IPostModel, Document {}

const PostSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  postCategory: {
    type: Schema.Types.ObjectId,
    ref: 'PostCategory',
    required: true
  },
  coverImg: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default model<IPostDocument>('Post', PostSchema)
