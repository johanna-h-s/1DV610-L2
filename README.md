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

Jest is used for all automated unit tests. All methods in the public class TextAnalyzer To run the tests:

```javascript
npm test
```

Usage
- installation
- import
- public code for use
- test

Example of use

Språk, beroende, versioner

Known bugs and issues

License öppen källkod

Development / contribute

Installation

Public methods / documentation