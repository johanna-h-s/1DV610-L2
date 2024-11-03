# Public methods of Tiny text analyzer

All public methods are located in the class TextAnalyzer.

## findUniqueWords()
**Description**\
Finds all unique words of the string. 

**Arguments**\
N/A

**Returns**\
An array of all unique words, in all lowercase letters and sorted alphabetically.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi hi, hello you!')
textAnalyzer.findUniqueWords() // Output: [ 'hello', 'hi', 'you' ]
```

## countWords()
**Description**\
Counts all words of the string.

**Arguments**\
N/A

**Returns**\
A number that is the total number of words present in the string.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi hi, hello you!')
textAnalyzer.countWords() // Output: 4
```

## countUniqueWords()
**Description**\
Counts all unique words of the string.

**Arguments**\
N/A

**Returns**\
A number that is the number of unique words present in the string. 

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi hi, hello you!')
textAnalyzer.countUniqueWords() // Output: 3
```

## findMostCommonWords()
**Description**\
Finds the most common word/s of the string.

**Arguments**\
Number of words to find, passed as type number.

**Returns**\
An array of the most common words, sorted in order of frequenzy and then, if two or more words have the same frequenzy, order of appearance.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi hi hi, hello to you and you!')
textAnalyzer.findMostCommonWords(2) // Output: [ 'hi', 'you' ]
```

## findLongestWord()
**Description**\
Finds the longest word/s of the string.

**Arguments**\
Number of words to find, passed as type number.

**Returns**\
An array of the longest words, sorted in order of word length and then, if two or more words have the same length, order of appearance..

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi and hello to you!')
textAnalyzer.findLongestWord(1) // Output: [ 'hello' ]
```

## findShortestWord()
**Description**\
Finds the shortest word/s of the string.

**Arguments**\
Number of words to find, passed as type number.

**Returns**\
An array of the shortest words, sorted in order of word length and then, if two or more words have the same length, order of appearance.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi and hello to you!')
textAnalyzer.findShortestWord(3) // Output: [ 'hi', 'to', 'and' ]
```

## findMedianWordLength()
**Description**\
Finds the median word length of the words of the string.

**Arguments**\
N/A

**Returns**\
A number (floating-point, no limit) that is the median word length.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi and hello to you!')
textAnalyzer.findMedianWordLength() // Output: 3
```

## findMostCommonWordLength()
**Description**\
Finds the most common word length of the words of the string.

**Arguments**\
N/A

**Returns**\
A number (floating-point, no limit) that is the most common word length.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi and hello to you!')
 textAnalyzer.findMostCommonWordLength() // Output: 3
```

## countAverageWordLength()
**Description**\
Computes the average word length of the words of the string.

**Arguments**\
N/A

**Returns**\
A number (floating-point, no limit) that is the average word length.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi and hello to you!')
 textAnalyzer.countAverageWordLength() // Output: 3
```

## countChars()
**Description**\
Counts the characters, including whitespace, of the string.

**Arguments**\
N/A

**Returns**\
A number that is the number of characters present in the string.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi and hello to you!')
textAnalyzer.countChars() // Output: 20
```

## countCharsMinusWhitespace()
**Description**\
Counts the characters, excluding whitespace, of the string.

**Arguments**\
N/A

**Returns**\
A number that is the number of characters, except for whitespaces, present in the string.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi and hello to you!')
textAnalyzer.countCharsMinusWhitespace() // Output: 16
```

## findMostCommonChars()
**Description**\
Finds the most common characters, including whitespace, of the string. 

**Arguments**\
Number of characters to find, passed as type number.

**Returns**\
An array of the most common characters of the string, sorted in order of frequency and then, if two or more characters have the same frequency, order of appearance.

**Example of use**
```javascript
const textAnalyzer = new TextAnalyzer('Hi and hello to you!')
 textAnalyzer.findMostCommonChars(3) // Output: [ 'o', 'h', 'l' ]
```