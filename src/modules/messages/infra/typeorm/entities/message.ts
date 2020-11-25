import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Message {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  user: string

  @Column()
  messageTopic: string

  @Column()
  messageText: string

  @Column()
  sender: string

  @Column()
  receiver: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
