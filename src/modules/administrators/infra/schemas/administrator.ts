import { Document, Schema, model } from 'mongoose'

export interface IAdministratorModel {
  name: string
  email: string
  password: string
  role: number
  profileImg?: string
}

export interface IResponseAdministratorModel extends IAdministratorModel {
  _id: string
}

export interface IAdministratorDocument extends IAdministratorModel, Document{}

const AdministratorSchema = new Schema({
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
  role: {
    type: Number,
    required: true
  },
  profileImg: {
    type: String,
    required: false
  }
})

export default model<IAdministratorDocument>('Administrator', AdministratorSchema)
