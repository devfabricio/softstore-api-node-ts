import { Document, Schema, model } from 'mongoose'

export interface ICustomizedImageGroupModel {
  name: string
  label: string
}

export interface ICustomizedImageGroupResponse extends ICustomizedImageGroupModel {
  _id: string
}

export interface ICustomizedImageGroupDocument extends ICustomizedImageGroupModel, Document {}

const CustomizedImageGroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  }
}, { timestamps: true })

export default model<ICustomizedImageGroupDocument>('CustomizedImageGroup', CustomizedImageGroupSchema)
