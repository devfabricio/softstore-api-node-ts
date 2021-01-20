import { Document, Schema, model } from 'mongoose'

export interface IProductCustomizedImageGroupRelationModel {
  any: string
}

export interface IProductCustomizedImageGroupRelationResponse extends IProductCustomizedImageGroupRelationModel {
  _id: string
}

export interface IProductCustomizedImageGroupRelationDocument extends IProductCustomizedImageGroupRelationModel, Document {}

const OptionSchema = new Schema({
  any: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default model<IProductCustomizedImageGroupRelationDocument>('ProductCustomizedImageGroupRelation', OptionSchema)
