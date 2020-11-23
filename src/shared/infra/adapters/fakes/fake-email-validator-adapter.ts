import { EmailValidatorAdapter } from '@shared/infra/adapters/email-validator-adapter'

export default class FakeEmailValidatorAdapter implements EmailValidatorAdapter {
  isValid (_: string): boolean {
    return true
  }
}
