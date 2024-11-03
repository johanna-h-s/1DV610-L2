# Tiny text analyzer

Tiny text analyzer is a lightweight JavaScript library for analyzing basic characteristics of a body of text. 

## Installation

Install *Tiny text analyzer* with npm.

```javascript
npm install tiny-text-analyzer --save
```

## Usage and examples

Import TextAnalyzer to your project and create a new TextAnalyzer with the string you want to analyze passed as an argument.

```javascript
const textAnalyzer = new TextAnalyzer('You think malaria makes me delirious? It happened. In Odessa it happened.')

const uniqeWords = textAnalyzer.findUniqueWords() // Output: 10
const longestWord = textAnalyzer.findLongestWord(1) // Output: ['delirious']
```

## Runtime dependencies

Tiny text analyzer is built without any external, runtime dependencies.

## Developement dependencies

Tiny text analyzer is using Jest as testing framework and ESlint for linting.

## Testing

Jest is used for all automated unit tests. All methods in the public class TextAnalyzer is directly tested and all other methods and accessors are indirectly tested. To run the tests:

```javascript
npm test
```

## Version history

**1.0.0** - Initial release with basic features.

## Known bugs and issues

The following public methods lack logic for handling words / word lengts / characters with the same number of frequency, word length or character count:

```javascript
findMostCommonWords()
findLongestWord()
findShortestWord()
findMostCommonWordLength()
findMostCommonChars()
```

If two or more words / word lengths / characters with the same frequency, word length or character count are present in the string that's being analyzed and not all of them can be returned due to the limit (passed as an argument), the listed methods will return words / word lengths / characters in order of appearance in the string.

# Licence

MIT License.

# Contribute

Anyone and everyone is welcome to contribute to *Tiny text analyzer*. 

Create an issue to make suggestions for further developement or to report a bug. 

Make a pull request to contribute. Make sure to document the code using JSDoc and add unit tests for 100% code coverage. All tests must pass.