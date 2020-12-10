import { Document, Schema, model } from 'mongoose'
import { IUserModel } from '@modules/users/infra/schemas/user'
import { IAdministratorModel } from '@modules/administrators/infra/schemas/administrator'

export interface IMessageInboxModel {
  user: string | IUserModel
  administrator: string | IAdministratorModel
  read: boolean
  lastMessageText: string
}

export interface IMessageInboxResponse extends IMessageInboxModel {
  _id: string
}

export interface IMessageInboxDocument extends IMessageInboxModel, Document {}

const MessageInboxSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  administrator: {
    type: Schema.Types.ObjectId,
    ref: 'Administrator',
    required: true
  },
  read: {
    type: Boolean,
    required: true
  },
  lastMessageText: {
    type: String,
    required: false
  }
}, { timestamps: true })

export default model<IMessageInboxDocument>('MessageInbox', MessageInboxSchema)
