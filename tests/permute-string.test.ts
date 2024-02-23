import { permuteString } from '../possible-words'

describe('permuteString function', () => {
  test('prevents duplicates', () => {
    expect([...permuteString('ooo')]).toEqual(['ooo'])
  })

  test('returns all permutations', () => {
    let result: Set<string>
    let asSortedArray: string[]

    result = permuteString('a')
    asSortedArray = [...result].sort()
    expect(asSortedArray).toEqual(['a'])

    result = permuteString('ab')
    asSortedArray = [...result].sort()
    expect(asSortedArray).toEqual(['ab', 'ba'])

    result = permuteString('abc')
    asSortedArray = [...result].sort()
    expect(asSortedArray).toEqual(['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])
  })
});
