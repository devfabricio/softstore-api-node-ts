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

  @Column()
  phone: string

  @Column()
  profileImg: string

  @Column()
  state: string

  @Column()
  city: string

  @Column()
  neighborhood: string

  @Column()
  street: string

  @Column()
  number: string

  @Column()
  complement: string

  @Column()
  reference: string

  @Column()
  zipcode: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
