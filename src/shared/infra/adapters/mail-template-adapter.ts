import handlebars from 'handlebars'
import IMailTemplateAdapter from '@shared/infra/adapters/protocols/i-mail-template-adapter'
import IParseMailTemplateDTO from '@shared/infra/adapters/dtos/i-parse-mail-template-dto'

export default class MailTemplateAdapter implements IMailTemplateAdapter {
  async parse ({ template, variables }: IParseMailTemplateDTO): Promise<string> {
    const parseTemplate = handlebars.compile(template)
    return parseTemplate(variables)
  }
}
