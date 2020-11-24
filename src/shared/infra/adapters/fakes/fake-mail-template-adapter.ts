import IMailTemplateAdapter from '@shared/infra/adapters/protocols/i-mail-template-adapter'
import IParseMailTemplateDTO from '@shared/infra/adapters/dtos/i-parse-mail-template-dto'

export default class FakeMailTemplateAdapter implements IMailTemplateAdapter {
  async parse ({ template }: IParseMailTemplateDTO): Promise<string> {
    return template
  }
}
