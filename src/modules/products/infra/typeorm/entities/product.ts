import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn ,JoinColumn, ManyToOne } from 'typeorm'
import { ProductPrimaryCategory } from '@modules/products/infra/typeorm/entities/product-primary-category'
import { ProductSecundaryCategory } from '@modules/products/infra/typeorm/entities/product-secundary-category'

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
  slug: string

  @Column()
  productPrimaryCategoryID: string

  @Column()
  productSecundaryCategoryID: string

  @ManyToOne(() => ProductPrimaryCategory)
  @JoinColumn({ name: 'productPrimaryCategoryID' })
  productPrimaryCategory: ProductPrimaryCategory

  @ManyToOne(() => ProductSecundaryCategory)
  @JoinColumn({ name: 'productSecundaryCategoryID' })
  productSecundaryCategory: ProductSecundaryCategory

  @Column()
  price: number

  @Column()
  oldPrice: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
