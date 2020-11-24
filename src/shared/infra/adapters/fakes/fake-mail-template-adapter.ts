import IMailTemplateAdapter from '@shared/infra/adapters/protocols/i-mail-template-adapter'

export default class FakeMailTemplateAdapter implements IMailTemplateAdapter {
  async parse (): Promise<string> {
    return 'template'
  }
}
