export const swapCharsAtIndices = (str: string, i: number, j: number): string => {
  if (str.length < 2) return str
  if (i === j) return str
  if (i < 0 || j < 0) return str
  if (i >= str.length || j >= str.length) return str

  const split: string[] = str.split('')
  split[i] = str[j]
  split[j] = str[i]
  return split.join('')
}

export const permuteString = (str: string, currentIndex: number = 0, permutations: Set<string> = new Set()): Set<string> => {
  if (currentIndex === str.length - 1) {
    permutations.add(str)
    return permutations
  }

  for (let i = currentIndex; i < str.length; i++) {
    const swapped: string = swapCharsAtIndices(str, i, currentIndex)
    permutations = permuteString(swapped, currentIndex + 1, permutations)
  }

  return permutations
}
