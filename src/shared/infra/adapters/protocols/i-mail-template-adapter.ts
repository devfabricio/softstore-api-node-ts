import IParseMailTemplateDTO from '@shared/infra/adapters/dtos/i-parse-mail-template-dto'

export default interface IMailTemplateAdapter {
  parse (data: IParseMailTemplateDTO): Promise<string>
}
