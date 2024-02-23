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

export const everySubstring = (str: string): Set<string> => {
  const substrings: Set<string> = new Set()

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.add(str.substring(i, j))
    }
  }

  return substrings
}

export const permuteStringAndSubstrings = (str: string, currentIndex: number = 0, permutations: Set<string> = new Set()): Set<string> => {
  if (currentIndex === str.length - 1) {
    permutations.add(str)
    permutations = new Set([...permutations, ...everySubstring(str)])
    return permutations
  }

  for (let i = currentIndex; i < str.length; i++) {
    const swapped: string = swapCharsAtIndices(str, i, currentIndex)
    permutations = permuteStringAndSubstrings(swapped, currentIndex + 1, permutations)
  }

  return permutations
}
