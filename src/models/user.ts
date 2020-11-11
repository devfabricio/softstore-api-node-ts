import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class User {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
