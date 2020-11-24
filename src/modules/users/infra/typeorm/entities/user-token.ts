import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
class UserToken {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  token: string

  @Column()
  user_id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default UserToken
