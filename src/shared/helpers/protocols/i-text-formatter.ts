export default interface ITextFormatter {
  trim (text: string): string
  removeAccents (text: string): string
  removeSpecialCharacters (text: string): string
  slugConverter (text: string): string
}
