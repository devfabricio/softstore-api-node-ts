import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class ProductCategory {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
