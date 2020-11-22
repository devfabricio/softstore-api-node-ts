import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Product {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  thumbImg: string

  @Column()
  size: string

  @Column()
  price: number

  @Column()
  oldPrice: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
