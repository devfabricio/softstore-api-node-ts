import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { ProductPrimaryCategory } from '@modules/products/infra/schemas/product-primary-category'
import { ProductSecundaryCategoryType } from '@modules/products/infra/typeorm/entities/product-secundary-category-type'

@Entity()
export class ProductSecundaryCategory {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  category: string

  @Column()
  productPrimaryCategory: ProductPrimaryCategory

  @Column()
  productSecundaryCategoryType: ProductSecundaryCategoryType

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
