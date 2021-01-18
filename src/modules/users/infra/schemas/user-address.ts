import { Document, Schema, model } from 'mongoose'
import { IResponseUserModel } from '@modules/users/infra/schemas/user'

export interface IUserAddressModel {
  user: string | IResponseUserModel
  country: string
  state: string
  city: string
  neighborhood: string
  street: string
  number: string
  complement?: string
  reference?: string
  zipcode: string
}

export interface IUserAddressResponse extends IUserAddressModel {
  _id: string
}

export interface IUserAddressDocument extends IUserAddressModel, Document{}

const UserAddressSchema = new Schema({
  country: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: false
  },
  neighborhood: {
    type: String,
    required: false
  },
  street: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  complement: {
    type: String,
    required: false
  },
  reference: {
    type: String,
    required: false
  },
  zipcode: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

export default model<IUserAddressDocument>('UserAddress', UserAddressSchema)
