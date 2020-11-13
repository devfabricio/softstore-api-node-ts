import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { Product } from './product'

@Entity()
export class ProductCategory {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  category: string

  @Column()
  product: Product

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
