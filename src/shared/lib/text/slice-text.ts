export const sliceText = (text: string, maxLength: number) =>
  text.length > maxLength ? text.slice(0, maxLength) + '...' : text
