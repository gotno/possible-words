import { possibleWords } from '../possible-words'
import wordlist from 'wordlist-english'

describe('possibleWords function', () => {
  test('returns all words in a given list that can be made by rearranging the letters of the input string or its substrings', () => {
    const popularEnglishWords: string[] = [
      ...wordlist['english/10'],
      ...wordlist['english/20'],
      ...wordlist['english/35'],
    ]

    expect(possibleWords('', popularEnglishWords).sort()).
      toEqual([])

    expect(possibleWords('a', popularEnglishWords).sort()).
      toEqual(['a'])

    expect(possibleWords('aaaa', popularEnglishWords).sort()).
      toEqual(['a'])

    expect(possibleWords('oogd', popularEnglishWords).sort()).
      toEqual(['do', 'dog', 'go', 'god', 'goo', 'good'])

    expect(possibleWords('word', popularEnglishWords).sort()).
      toEqual(['do', 'or', 'rod', 'row', 'word'])
  })
});
