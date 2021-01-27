import { Router } from 'express'
import { isAdminAuth } from '@shared/main/middlewares/is-admin-auth'
import CategoryRelationshipController from '@modules/products/controllers/category-relationship-controller'

const categoryRelationshipRouter = Router()
const categoryRelationshipController = new CategoryRelationshipController()

categoryRelationshipRouter.get('/', categoryRelationshipController.index)
categoryRelationshipRouter.get('/:id', categoryRelationshipController.show)
categoryRelationshipRouter.delete('/:id', categoryRelationshipController.delete)
categoryRelationshipRouter.post('/', isAdminAuth, categoryRelationshipController.create)
categoryRelationshipRouter.put('/', isAdminAuth, categoryRelationshipController.update)

export default categoryRelationshipRouter
