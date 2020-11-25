import ITextFormatter from '@shared/helpers/protocols/i-text-formatter'

export default class TextFormatter implements ITextFormatter {
  removeAccents (text: string): string {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  }

  removeSpecialCharacters (text: string): string {
    return text.replace(/[^\w\s]/gi, '')
  }

  slugConverter (text: string): string {
    const removedWhiteSpaces = text.trim().replace(/\s\s+/g, ' ')
    const removedAccents = removedWhiteSpaces.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    const removedSpecialCharacters = removedAccents.replace(/[^\w\s]/gi, '')
    const slug = removedSpecialCharacters.toLowerCase().replace(/\s/g, '-')
    return slug
  }

  trim (text: string): string {
    return text.trim().replace(/\s\s+/g, ' ')
  }
}
