import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { User } from './user'

@Entity()
export class Testimony {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  user: User

  @Column()
  text: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
