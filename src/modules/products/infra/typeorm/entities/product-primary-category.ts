import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm'

@Entity()
export class ProductPrimaryCategory {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  name: string

  @Column()
  slug: string
}
