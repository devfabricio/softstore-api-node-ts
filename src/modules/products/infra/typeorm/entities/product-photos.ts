import { Column, ObjectIdColumn, ObjectID } from 'typeorm'

export class ProductPhotos {
  @ObjectIdColumn()
  id: ObjectID

  @Column()
  url: string

  @Column()
  width: number

  @Column()
  height: number

  constructor (url: string, width: number, height: number) {
    this.url = url
    this.width = width
    this.height = height
  }
}
