import AppError from '@shared/errors/app-error'
import { FakeUserRepository } from '@modules/users/infra/repositories/fakes/fake-user-repository'
import FakeBcryptAdapter from '@shared/infra/adapters/fakes/fake-bcrypt-adapter'
import UpdateUserProfileService from '@modules/users/services/user/update-user-profile-service'
import IUserRepository from '@modules/users/infra/repositories/protocols/i-user-repository'
import BcryptAdater from '@shared/infra/adapters/bcrypt-adater'

interface ISutTypes {
  sut: UpdateUserProfileService
  userRepository: IUserRepository
  bcryptAdapter: BcryptAdater
}

const makeSut = (): ISutTypes => {
  const userRepository = new FakeUserRepository()
  const bcryptAdapter = new FakeBcryptAdapter()
  const sut = new UpdateUserProfileService(userRepository, bcryptAdapter)
  return {
    sut,
    userRepository,
    bcryptAdapter
  }
}

describe('UpdateUserProfileService', () => {
  it('Should returns error if no id is provided', async () => {
    const { sut } = makeSut()
    await expect(sut.execute({})).rejects.toEqual(new AppError('Missing param: _id'))
  })
  it('Should return error if invalid user id is provided', async () => {
    const { sut } = makeSut()
    const body: any = {
      _id: 'any_invalid_id'
    }
    await expect(sut.execute(body))
      .rejects.toEqual(new AppError('User not found'))
  })
  it('Should returns error if e-mail already exists', async () => {
    const { sut, userRepository } = makeSut()
    await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })
    await userRepository.create({
      name: 'other_name',
      email: 'other_email@email.com.br',
      password: 'any_password'
    })
    await expect(sut.execute({
      _id: 'any_id',
      email: 'other_email@email.com.br'
    })).rejects.toEqual(new AppError('Email already in use'))
  })
  it('Should returns error if password is provided and oldPassword is not provided', async () => {
    const { sut, userRepository } = makeSut()
    await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: 'any_password'
    })
    await expect(sut.execute({
      _id: 'any_id',
      password: 'any_password'
    })).rejects.toEqual(new AppError('You need to inform the old password to set a new password'))
  })
  it('Should returns error if password and old password does not match', async () => {
    const { sut, userRepository, bcryptAdapter } = makeSut()
    await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: await bcryptAdapter.hash('any_password')
    })
    await expect(sut.execute({
      _id: 'any_id',
      password: 'any_password',
      oldPassword: 'other_password'
    })).rejects.toEqual(new AppError('Current password does not match'))
  })
  it('Should calls hash method of bcrypt with correct value', async () => {
    const { sut, userRepository, bcryptAdapter } = makeSut()
    await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: await bcryptAdapter.hash('any_password')
    })
    const onPasswordHashSpy = jest.spyOn(bcryptAdapter, 'hash')
    await sut.execute({
      _id: 'any_id',
      name: 'any_name',
      email: 'other_email@email.com.br',
      password: 'other_password',
      oldPassword: 'any_password'
    })
    expect(onPasswordHashSpy).toHaveBeenCalledWith('other_password')
  })
  it('Should returns a user object if register successful', async () => {
    const { sut, userRepository, bcryptAdapter } = makeSut()
    await userRepository.create({
      name: 'any_name',
      email: 'any_email@email.com.br',
      password: await bcryptAdapter.hash('any_password')
    })
    await expect(sut.execute({
      _id: 'any_id',
      name: 'any_name',
      email: 'other_email@email.com.br',
      password: 'other_password',
      oldPassword: 'any_password'
    })).resolves.toHaveProperty('_id')
  })
})
