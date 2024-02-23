import { permuteStringAndSubstrings } from '../possible-words'

describe('permuteStringAndSubstrings function', () => {
  test('prevents duplicates', () => {
    expect([...permuteStringAndSubstrings('ooo')].sort()).toEqual(['o', 'oo', 'ooo'])
  })

  test('returns all permutations', () => {
    let result: Set<string>
    let asSortedArray: string[]

    result = permuteStringAndSubstrings('a')
    asSortedArray = [...result].sort()
    expect(asSortedArray).toEqual(['a'])

    result = permuteStringAndSubstrings('ab')
    asSortedArray = [...result].sort()
    expect(asSortedArray).toEqual(['a', 'ab', 'b', 'ba'])

    result = permuteStringAndSubstrings('abc')
    asSortedArray = [...result].sort()
    expect(asSortedArray).toEqual([
      'a',   'ab',  'abc',
      'ac',  'acb', 'b',
      'ba',  'bac', 'bc',
      'bca', 'c',   'ca',
      'cab', 'cb',  'cba'
    ])

    result = permuteStringAndSubstrings('word')
    asSortedArray = [...result].sort()
    expect(asSortedArray).toEqual([
      'd',    'do',   'dor',  'dorw', 'dow',  'dowr',
      'dr',   'dro',  'drow', 'drw',  'drwo', 'dw',
      'dwo',  'dwor', 'dwr',  'dwro', 'o',    'od',
      'odr',  'odrw', 'odw',  'odwr', 'or',   'ord',
      'ordw', 'orw',  'orwd', 'ow',   'owd',  'owdr',
      'owr',  'owrd', 'r',    'rd',   'rdo',  'rdow',
      'rdw',  'rdwo', 'ro',   'rod',  'rodw', 'row',
      'rowd', 'rw',   'rwd',  'rwdo', 'rwo',  'rwod',
      'w',    'wd',   'wdo',  'wdor', 'wdr',  'wdro',
      'wo',   'wod',  'wodr', 'wor',  'word', 'wr',
      'wrd',  'wrdo', 'wro',  'wrod'
    ])
  })
});
