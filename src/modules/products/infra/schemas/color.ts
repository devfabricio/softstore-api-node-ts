import { Document, Schema, model } from 'mongoose'

export interface IColorModel {
  name: string
  hexa: string
  rgb: string
}

export interface IColorResponse extends IColorModel {
  _id: string
}

export interface IColorDocument extends IColorModel, Document {}

const ColorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  hexa: {
    type: String,
    required: true
  },
  rgb: {
    type: String,
    required: false
  }
}, { timestamps: true })

export default model<IColorDocument>('Color', ColorSchema)
