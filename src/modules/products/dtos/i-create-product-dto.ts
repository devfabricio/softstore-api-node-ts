export default interface ICreateProductDTO {
  name: string
  description: string
  thumbImg: string
  slug: string
  productPrimaryCategoryID: string
  productSecundaryCategoryID?: string
  price: number
  oldPrice?: number
}
