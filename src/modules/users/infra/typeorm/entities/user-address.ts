import { Entity, ObjectID, ObjectIdColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class UserAddress {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  user: string

  @Column()
  country: string

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
