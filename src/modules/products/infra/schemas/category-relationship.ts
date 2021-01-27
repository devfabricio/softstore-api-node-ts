import { Document, Schema, model } from 'mongoose'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'

export interface ICategoryRelationshipModel {
  category: string | ICategoryResponse
  parent?: string | ICategoryResponse
  count: number
}

export interface ICategoryRelationshipResponse extends ICategoryRelationshipModel {
  _id: string
}

export interface ICategoryRelationshipDocument extends ICategoryRelationshipModel, Document {}

const OptionSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: false
  },
  count: {
    type: Number,
    required: true
  }
}, { timestamps: true })

export default model<ICategoryRelationshipDocument>('CategoryRelationship', OptionSchema)
