import IBcryptAdapter from '@shared/infra/adapters/protocols/i-bcrypt-adapter'
import bcrypt from 'bcryptjs'

export default class BcryptAdater implements IBcryptAdapter {
  async compare (payload: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(payload, hashed)
  }

  async hash (payload: string): Promise<string> {
    return await bcrypt.hash(payload, 12)
  }
}
