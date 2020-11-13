import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { Offer } from './offer'
import { Product } from './product'

@Entity()
export class ProductOffer {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  offer: Offer

  @Column()
  product: Product

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
