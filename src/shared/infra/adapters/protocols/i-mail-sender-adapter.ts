export default interface IMailSenderAdapter {
  send(to: string, body: string): Promise<void>
}
