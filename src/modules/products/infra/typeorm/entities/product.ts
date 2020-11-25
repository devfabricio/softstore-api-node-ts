import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { ProductPrimaryCategory } from '@modules/products/infra/typeorm/entities/product-primary-category'

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
  productPrimaryCategory: ProductPrimaryCategory

  @Column()
  price: number

  @Column()
  oldPrice: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
