import { Document, Schema, model } from 'mongoose'
import { ICustomizedImageGroupResponse } from '@modules/customized-image/infra/schemas/customized-image-group'
import { ICustomizedImageResponse } from '@modules/customized-image/infra/schemas/customized-image'

export interface ICustomizedImageGroupRelationModel {
  image: string | ICustomizedImageResponse
  group: string | ICustomizedImageGroupResponse
}

export interface ICustomizedImageGroupRelationResponse extends ICustomizedImageGroupRelationModel {
  _id: string
}

export interface ICustomizedImageGroupRelationDocument extends ICustomizedImageGroupRelationModel, Document {}

const CustomizedImageGroupRelationSchema = new Schema({
  image: {
    type: Schema.Types.ObjectId,
    ref: 'CustomizedImage',
    required: true
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: 'CustomizedImageGroup',
    required: true
  }
}, { timestamps: true })

export default model<ICustomizedImageGroupRelationDocument>('CustomizedImageGroupRelation', CustomizedImageGroupRelationSchema)
