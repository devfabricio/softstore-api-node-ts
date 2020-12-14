import { Document, Schema, model } from 'mongoose'
import { IUserModel } from '@modules/users/infra/schemas/user'

export interface IMessageInboxModel {
  user: string | IUserModel
  read: boolean
  lastSender: string
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
  read: {
    type: Boolean,
    required: true
  },
  lastSender: {
    type: String,
    required: true
  },
  lastMessageText: {
    type: String,
    required: false
  }
}, { timestamps: true })

export default model<IMessageInboxDocument>('MessageInbox', MessageInboxSchema)
