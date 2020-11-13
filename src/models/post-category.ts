import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, UpdateDateColumn } from 'typeorm'
import { Post } from './post'

@Entity()
export class PostCategory {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  category: string

  @Column()
  post: Post

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
}
