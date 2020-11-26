import { Column, ObjectIdColumn } from 'typeorm'

export class UserAddress {
  @ObjectIdColumn()
  id: string

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
}
