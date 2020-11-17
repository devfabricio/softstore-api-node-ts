import { Router } from 'express'
import { getRepository } from 'typeorm/index'
import { ProductCategory } from '../models/product-category'

const productCategoriesRouter = Router()

productCategoriesRouter.post('/', async (req, res) => {
  try {
    const productCategoryRepository = getRepository(ProductCategory)
    const { name } = req.body
    const createProductCategory = productCategoryRepository.create({ name })
    const productCategory = await productCategoryRepository.save(createProductCategory)
    return res.status(201).json(productCategory)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default productCategoriesRouter
