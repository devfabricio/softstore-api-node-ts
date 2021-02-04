import ICategoryRelationshipRepository from '@modules/products/infra/repositories/protocols/i-category-relationship-repository'
import { ICategoryRelationshipResponse } from '@modules/products/infra/schemas/category-relationship'

export default class ListCategoryRelationshipService {
  constructor (
    private readonly categoryRelationshipRepository: ICategoryRelationshipRepository) {}

  public async execute (): Promise<ICategoryRelationshipResponse[]> {
    const response = await this.categoryRelationshipRepository.find()

    const categoriesRelationship: ICategoryRelationshipResponse[] = []
    const noParents: any = response.filter(catRel => !catRel.parent)

    const orderParents = (parentCategoryRelationship: any, level: number): void => {
      parentCategoryRelationship.level = level
      categoriesRelationship.push(parentCategoryRelationship)
      const children: any = response.filter((catRel: any) =>
        String(catRel.parent?._id) === String(parentCategoryRelationship.category._id))
      for (const categoryRelationship of children) {
        if (response.filter((catRel: any) => catRel.parent?._id === categoryRelationship._id)) {
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
