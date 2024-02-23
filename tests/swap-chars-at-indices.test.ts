import { swapCharsAtIndices } from '../possible-words'

describe('swapCharsAtIndices function', () => {
  test('receives an empty string, returns an empty string', () => {
    expect(swapCharsAtIndices('', 0, 1)).toBe('')
  })

  test('receives a single charater string, returns a single charater string', () => {
    expect(swapCharsAtIndices('a', 0, 1)).toBe('a')
  })

  test('returns the input string when indices are out of bounds', () => {
    expect(swapCharsAtIndices('abc', 0, 7)).toBe('abc')
    expect(swapCharsAtIndices('abc', 8, 1)).toBe('abc')
    expect(swapCharsAtIndices('abc', -2, 1)).toBe('abc')
    expect(swapCharsAtIndices('abc', -7, -12)).toBe('abc')
  })

  test('appropriately swaps characters', () => {
    expect(swapCharsAtIndices('ab', 0, 1)).toBe('ba')
    expect(swapCharsAtIndices('abc', 1, 2)).toBe('acb')
    expect(swapCharsAtIndices('abcd', 1, 3)).toBe('adcb')
    expect(swapCharsAtIndices('abcd', 3, 1)).toBe('adcb')
  });
});
