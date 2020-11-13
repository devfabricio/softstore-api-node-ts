import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Post {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  title: string

  @Column()
  text: string

  @Column()
  coverImg: string

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
