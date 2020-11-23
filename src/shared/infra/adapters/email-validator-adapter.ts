import IEmailValidatorAdapter from '@shared/infra/adapters/protocols/i-email-validator-adapter'
import validator from 'validator'

export class EmailValidatorAdapter implements IEmailValidatorAdapter {
  isValid (email: string): boolean {
    return validator.isEmail(email)
  }
}
