import { Document, Schema, model } from 'mongoose'

export interface IDefaultModel {
  any: string
}

export interface IDefaultResponse extends IDefaultModel {
  _id: string
}

export interface IDefaultDocument extends IDefaultModel, Document {}

const OptionSchema = new Schema({
  any: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default model<IDefaultDocument>('Default', OptionSchema)
