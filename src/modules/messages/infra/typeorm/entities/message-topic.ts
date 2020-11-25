import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class MessageTopic {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  user: string

  @Column()
  subject: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
