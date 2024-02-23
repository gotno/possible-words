/**
 * Swaps the characters of a given string at the given indices
 * @param {string} str - the input string
 * @param {number} i - the first index
 * @param {number} j - the second index
 * @returns {string}
 */
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

/**
 * Generates a set of the unique substrings of a given string
 * @param {string} str - the input string
 * @returns {Set.<string>}
 */
export const everySubstring = (str: string): Set<string> => {
  const substrings: Set<string> = new Set()

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      substrings.add(str.substring(i, j))
    }
  }

  return substrings
}

/**
 * Generates a set of unique permutations of an input string and its substrings
 * @param {string} str - the input string to permute
 * @param {number} [currentIndex=0] - the starting index for the recursive swapping algorithm
 * @param {Set.<string>} [permutations=new Set()] - the set of permutations that will be returned
 * @returns {Set.<string>}
 */
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

/**
 * Generates a list of words in the given wordlist that can be constructed
 * from permutations of a given string and its substrings.
 * @param {string} str - the input string to permute
 * @param {string[]} wordList - the list of words to check permutations of the string against
 * @returns {string[]} 
 */
export const possibleWords = (str: string, wordList: string[]): string[] => {
  const permutations: string[] = [...permuteStringAndSubstrings(str)]
  return permutations.filter((candidate) => wordList.includes(candidate))
}
