import ICategoryRelationshipRepository from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'
import { ICategoryRelationshipResponse } from '@modules/products/infra/schemas/category-relationship'
import { ICategoryResponse } from '@modules/products/infra/schemas/category'

interface IResponse extends ICategoryRelationshipResponse{
  category: ICategoryResponse
  parent?: ICategoryResponse
}

export default class ListCategoryRelationshipService {
  constructor (
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository) {}

  public async execute (): Promise<ICategoryRelationshipResponse[]> {
    const response = await this.categoryRelationshipRepository.find()

    const categoriesRelationship: ICategoryRelationshipResponse[] = []
    const noParents: IResponse[] = response.filter(catRel => !catRel.parent) as IResponse[]

    const orderParents = (parentCategoryRelationship: IResponse, level: number): void => {
      parentCategoryRelationship.level = level
      categoriesRelationship.push(parentCategoryRelationship)
      const children: IResponse[] = response.filter((catRel: IResponse) => {
        return catRel.parent?._id === parentCategoryRelationship.category._id
      }) as IResponse[]
      for (const categoryRelationship of children) {
        if (response.filter((catRel: IResponse) => catRel.parent?._id === categoryRelationship._id)) {
          orderParents(categoryRelationship, level + 1)
        } else {
          categoryRelationship.level = level + 1
          categoriesRelationship.push(categoryRelationship)
        }
      }
    }

    for (const categoryRelationship of noParents) {
      orderParents(categoryRelationship, 0)
    }

    return categoriesRelationship
  }
}
