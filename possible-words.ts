export const swapCharsAtIndices = (str: string, i: number, j: number): string => {
  if (str.length < 2) return str
  if (i < 0 || j < 0) return str
  if (i >= str.length || j >= str.length) return str

  const split: string[] = str.split('')
  split[i] = str[j]
  split[j] = str[i]
  return split.join('')
}

export const permuteString = (str: string): Set<string> => new Set()
