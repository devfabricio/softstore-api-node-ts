import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class ProductPrimaryCategory {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  category: string

  @Column()
  slug: string
}
