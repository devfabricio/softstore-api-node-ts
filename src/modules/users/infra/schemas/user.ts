import { Document, Schema, model } from 'mongoose'

export interface IUserModel {
  name: string
  email: string
  password: string
  phone?: string
  messageInbox?: string
  profileImg?: string
}

export interface IResponseUserModel extends IUserModel {
  _id: string
}

export interface IUserDocument extends IUserModel, Document{}

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  profileImg: {
    type: String,
    required: false
  },
  messageInbox: {
    type: Schema.Types.ObjectId,
    ref: 'MessageInbox',
    required: true
  }
}, { timestamps: true })

export default model<IUserDocument>('User', UserSchema)
