import AppError from '@shared/errors/app-error'
import { FakeUserRepository } from '@modules/users/infra/repositories/fakes/fake-user-repository'
import ShowUserProfileService from '@modules/users/services/user/show-user-profile-service'
import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'

interface ISutTypes {
  sut: ShowUserProfileService
  userRepository: IUserRepository
}

const makeSut = (): ISutTypes => {
  const userRepository = new FakeUserRepository()
  const sut = new ShowUserProfileService(userRepository)
  return {
    sut,
    userRepository
  }
}

describe('ShowUserProfileService', () => {
  it('Should returns error if no name is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute(undefined))
      .rejects.toEqual(new AppError('Missing param: id'))
  })
  it('Should return error if invalid user id is provided', async () => {
    const { sut } = makeSut()
    const body: any = {
      id: 'any_invalid_id'
    }
    await expect(sut.execute(body.id))
      .rejects.toEqual(new AppError('User not found'))
  })
  it('Should returns a user object if register successful', async () => {
    const { sut, userRepository } = makeSut()
    await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })
    await expect(sut.execute('any_id')).resolves.toHaveProperty('_id')
  })
})
