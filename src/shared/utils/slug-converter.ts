export const slugConverter = (text: string): string => {
  const removedAccents = text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  const removedSpecialCharacters = removedAccents.replace(/[^\w\s]/gi, '')
  const slug = removedSpecialCharacters.replace(' ', '-').toLowerCase()
  return slug
}
