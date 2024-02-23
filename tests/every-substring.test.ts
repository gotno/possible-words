import { everySubstring } from '../possible-words'

describe('everySubstring function', () => {
  test('includes the original string', () => {
    expect(everySubstring('abc').has('abc')).toBe(true)
  })

  test('works for an empty string', () => {
    expect([...everySubstring('')]).toEqual([])
  })

  test('works for a single character string', () => {
    expect([...everySubstring('x')]).toEqual(['x'])
  })

  test('works for a longer string', () => {
    expect([...everySubstring('abc')].sort()).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c'])
  })
});
