import { Document, Schema, model } from 'mongoose'
import { ICustomizedImageGroupResponse } from '@modules/customized-image/infra/schemas/customized-image-group'
import { IProductResponse } from '@modules/products/infra/schemas/product'

export interface IProductCustomizedImageGroupRelationModel {
  group: string | ICustomizedImageGroupResponse
  product: string | IProductResponse
}

export interface IProductCustomizedImageGroupRelationResponse extends IProductCustomizedImageGroupRelationModel {
  _id: string
}

export interface IProductCustomizedImageGroupRelationDocument extends IProductCustomizedImageGroupRelationModel, Document {}

const ProductCustomizedImageGroupRelationSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'CustomizedImageGroup',
    required: true
  }
}, { timestamps: true })

export default model<IProductCustomizedImageGroupRelationDocument>('ProductCustomizedImageGroupRelation', ProductCustomizedImageGroupRelationSchema)
