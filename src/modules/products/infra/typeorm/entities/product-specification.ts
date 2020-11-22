import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { Product } from './product'

@Entity()
export class ProductSpecification {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  product: Product

  @Column()
  specificationName: string

  @Column()
  specificationValue: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
