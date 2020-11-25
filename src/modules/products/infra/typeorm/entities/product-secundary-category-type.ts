import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { ProductPrimaryCategory } from '@modules/products/infra/typeorm/entities/product-primary-category'

@Entity()
export class ProductSecundaryCategoryType {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  type: string

  @Column()
  productPrimaryCategory: ProductPrimaryCategory

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
