import { Document, Schema, model } from 'mongoose'
import { IProductCategoryResponse } from '@modules/products/infra/schemas/product-category'
import { IProductSpecificationResponse } from '@modules/products/infra/schemas/product-specification'
import { IProductCustomizedTextResponse } from '@modules/products/infra/schemas/product-customized-text'
import { IProductCustomizedImageGroupRelationResponse } from '@modules/products/infra/schemas/product-customized-image-group-relation'

export interface IProductModel {
  name: string
  description: string
  thumbImg: string
  slug: string
  status: string
  price: number
  oldPrice?: number
  costPerItem?: number
  quantityInStock?: number
  sku?: string
  barCode?: number
  weight?: number
  packingHeight?: number
  packingLength?: number
  packingWidth?: number
}

export interface IProductResponse extends IProductModel {
  _id: string
  categories?: IProductCategoryResponse[]
  specifications?: IProductSpecificationResponse[]
  customizedTexts?: IProductCustomizedTextResponse[]
  customizedImages?: IProductCustomizedImageGroupRelationResponse[]
}

export interface IProductDocument extends IProductModel, Document {}

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbImg: {
    type: String,
    required: true
  },
  slug: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  oldPrice: {
    type: Number,
    required: false
  },
  costPerItem: {
    type: Number,
    required: false
  },
  quantityInStock: {
    type: Number,
    required: false
  },
  sku: {
    type: String,
    required: false
  },
  barCode: {
    type: Number,
    required: false
  },
  weight: {
    type: Number,
    required: false
  },
  packingHeight: {
    type: Number,
    required: false
  },
  packingLength: {
    type: Number,
    required: false
  },
  packingWidth: {
    type: Number,
    required: false
  }
}, { timestamps: true })

export default model<IProductDocument>('Product', ProductSchema)
