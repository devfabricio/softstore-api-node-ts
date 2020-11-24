import handlebars from 'handlebars'
import fs from 'fs'
import IMailTemplateAdapter from '@shared/infra/adapters/protocols/i-mail-template-adapter'
import IParseMailTemplateDTO from '@shared/infra/adapters/dtos/i-parse-mail-template-dto'

export default class MailTemplateAdapter implements IMailTemplateAdapter {
  async parse ({ file, variables }: IParseMailTemplateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8'
    })
    const parseTemplate = handlebars.compile(templateFileContent)
    return parseTemplate(variables)
  }
}
