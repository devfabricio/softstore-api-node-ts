import { Router } from 'express'
import { getRepository } from 'typeorm'
import { ProductCategory } from '@modules/products/infra/typeorm/entities/product-category'

const productCategoriesRouter = Router()

productCategoriesRouter.post('/', async (req, res) => {
  const productCategoryRepository = getRepository(ProductCategory)
  const { name } = req.body
  const createProductCategory = productCategoryRepository.create({ name })
  const productCategory = await productCategoryRepository.save(createProductCategory)
  return res.status(201).json(productCategory)
})

export default productCategoriesRouter
