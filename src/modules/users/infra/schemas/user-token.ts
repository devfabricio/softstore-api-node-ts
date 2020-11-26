import { Document, Schema, model } from 'mongoose'

export interface IUserTokenModel {
  token: string
  user: string
}

export interface IResponseUserToken extends IUserTokenModel {
  _id: string
}

export interface IUserTokenDocument extends IUserTokenModel, Document{}

const UserTokenSchema = new Schema({
  token: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
})

export default model<IUserTokenDocument>('UserToken', UserTokenSchema)
