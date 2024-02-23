## `possibleWords`
`possibleWords` is a function that, for a provided **string** and **wordlist**, returns a list of words in the worldlist that match permutations of the string and its substrings.

### example usage
```javascript
import arrayOfMostPopularEnglishWords from 'some-package'

possibleWords('oogd', arrayOfMostPopularEnglishWords)
// -> [ 'go', 'god', 'do', 'dog', 'good', 'goo' ]

possibleWords('word', arrayOfMostPopularEnglishWords)
// -> [ 'word', 'or', 'rod', 'do', 'row' ]
```

### technical details
The permutations of the input string are generated with a recursive function.

This function takes the string, and starting at a given index `currentIndex` (default 0), loops through the length of the string, at each iteration swapping `currentIndex` for one of the other letters at greater indices. At each iteration, it also passes this new string with swapped characters back through the function with `currentIndex` incremented to choose a new character to swap with all of the further characters.

When the recursive calls have caused `currentIndex` to reach the end of the string, the base case has been reached, and that string is added to the set of all possible permutations. At this point, another function is called to generate all possible substrings of the permutation, and those substrings are also added to the set of permutations.

### optimization?
Generating permutations is _slow_ and generating every substring will always be O(n^2) so there isn't much hope of optimizing this function. Perhaps some small gains could be won around how the substrings are being integrated with the larger set of permutations.
