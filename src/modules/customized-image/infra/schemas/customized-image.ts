import { Document, Schema, model } from 'mongoose'

export interface ICustomizedImageModel {
  url: string
  thumbUrl: string
  width: number
  height: number
  thumbWidth: number
  thumbHeight: number
}

export interface ICustomizedImageResponse extends ICustomizedImageModel {
  _id: string
}

export interface ICustomizedImageDocument extends ICustomizedImageModel, Document {}

const CustomizedImageSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  thumbUrl: {
    type: String,
    required: true
  },
  width: {
    type: Number,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  thumbWidth: {
    type: Number,
    required: true
  },
  thumbHeight: {
    type: Number,
    required: true
  }
}, { timestamps: true })

export default model<ICustomizedImageDocument>('CustomizedImage', CustomizedImageSchema)
