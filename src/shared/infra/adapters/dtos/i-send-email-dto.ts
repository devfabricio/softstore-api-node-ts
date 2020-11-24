import IParseMailTemplateDTO from '@shared/infra/adapters/dtos/i-parse-mail-template-dto'

interface IMailContact {
  name: string
  email: string
}

export default interface ISendEmailDTO {
  to: IMailContact
  from?: IMailContact
  subject: string
  templateData: IParseMailTemplateDTO
}
