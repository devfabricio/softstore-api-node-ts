import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, Generated, UpdateDateColumn } from 'typeorm'

@Entity()
class UserToken {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  @Generated('uuid')
  token: string

  @Column()
  email: string

  @Column()
  user_id: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}

export default UserToken
