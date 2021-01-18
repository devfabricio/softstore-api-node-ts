import { Document, Schema, model } from 'mongoose'

export type optionsTypes = 'siteTitle' | 'siteDescription' | 'address' | 'phone' | 'email' | 'openingHours' |
'about' | 'facebook' | 'instagram' | 'linkedin' | 'pinterest' | 'twitter' | 'youtube'

export interface IOptionModel {
  key: optionsTypes
  value: string
}

export interface IOptionResponse extends IOptionModel {
  _id: string
}

export interface IOptionDocument extends IOptionModel, Document {}

export interface IOptionKeyTypes {
  siteTitle: string
  siteDescription: string
  address: string
  phone: string
  email: string
  openingHours: string
  about: string
  facebook: string
  instagram: string
  linkedin: string
  pinterest: string
  twitter: string
  youtube: string
}

const OptionSchema = new Schema({
  key: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: false
  }
}, { timestamps: true })

export default model<IOptionDocument>('Option', OptionSchema)
