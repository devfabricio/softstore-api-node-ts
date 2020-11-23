export default interface IBcryptAdapter {
  hash(payload: string): Promise<string>
  compare(payload: string, hashed: string): Promise<boolean>
}
