import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'

export default class FakeBcryptAdapter implements IBcryptAdapter {
  async compare (payload: string, hashed: string): Promise<boolean> {
    return `hashed_${payload}` === hashed
  }

  async hash (payload: string): Promise<string> {
    return `hashed_${payload}`
  }
}
