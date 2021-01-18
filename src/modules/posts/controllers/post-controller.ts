import { Request, Response } from 'express'
import { IController } from '@shared/protocols/i-controller'
import {
  makeCreatePostService, makeDeletePostService,
  makeListPostService,
  makeShowPostService,
  makeUpdatePostService
} from '@modules/posts/factories/post'

export default class PostController implements IController {
  async index (request: Request, response: Response): Promise<Response> {
    const listPostService = makeListPostService()
    const postList = await listPostService.execute()
    return response.status(200).json(postList)
  }

  async create (request: Request, response: Response): Promise<Response> {
    const createPostService = makeCreatePostService()
    const post = await createPostService.execute(request.body)
    return response.status(201).json(post)
  }

  async update (request: Request, response: Response): Promise<Response> {
    const updatePostService = makeUpdatePostService()
    await updatePostService.execute(request.body)
    return response.status(206).json({})
  }

  async show (request: Request, response: Response): Promise<Response> {
    const showPostService = makeShowPostService()
    const id = request.params.id
    const slug = request.params.slug
    const post = await showPostService.execute({ _id: id, slug })
    return response.status(200).json(post)
  }

  async delete (request: Request, response: Response): Promise<Response> {
    const id = request.params.id
    const deletePostService = makeDeletePostService()
    await deletePostService.execute(id)
    return response.status(204).json()
  }
}
