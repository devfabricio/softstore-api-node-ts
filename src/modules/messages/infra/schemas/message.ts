import { Document, Schema, model } from 'mongoose'
import { IUserModel } from '@modules/users/infra/schemas/user'
import { IMessageInboxModel } from '@modules/messages/infra/schemas/message-inbox'

export interface IMessageModel {
  user: string | IUserModel
  messageInbox: string | IMessageInboxModel
  sender: string
  messageText?: string
  messageImg?: string
  messageProduct?: string
}

export interface IMessageResponse extends IMessageModel {
  _id: string
}

export interface IMessageDocument extends IMessageModel, Document {}

const MessageSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sender: {
    type: String,
    required: true
  },
  messageInbox: {
    type: Schema.Types.ObjectId,
    ref: 'MessageInbox',
    required: true
  },
  messageText: {
    type: String,
    required: false
  },
  messageImg: {
    type: String,
    required: false
  },
  messageProduct: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    required: false
  }
}, { timestamps: true })

export default model<IMessageDocument>('Message', MessageSchema)
