import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { User } from '@modules/users/infra/typeorm/entities/user'
import { Product } from './product'

@Entity()
export class CartItem {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  user: User

  @Column()
  product: Product

  @Column()
  quantity: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
