import { Document, Schema, model } from 'mongoose'
import { IProductResponse } from '@modules/products/infra/schemas/product'

export interface IProductCustomizedTextModel {
  product: string | IProductResponse
  label: string
}

export interface IProductCustomizedTextResponse extends IProductCustomizedTextModel {
  _id: string
}

export interface IProductCustomizedTextDocument extends IProductCustomizedTextModel, Document {}

const ProductCustomizedTextSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  label: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default model<IProductCustomizedTextDocument>('ProductCustomizedText', ProductCustomizedTextSchema)
