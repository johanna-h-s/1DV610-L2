/**
 * Module for the class TextAnalyzer.
 *
 * @author Johanna Stenbeck <js226rv@student.lnu.se>
 * @version 1.0.0
 */

import { WordAnalyzer } from './helpers/WordAnalyzer.js'
import { CharAnalyzer } from './helpers/CharAnalyzer.js'

/**
 * Represents a text analyzer.
 */
export class TextAnalyzer {
  #stringToAnalyze
  #wordAnalyzer
  #charAnalyzer

  /**
   * Initializes a new instances of the TextAnalyzer class.
   *
   * @param {string} stringToAnalyze - The string to analyze.
   */
  constructor (stringToAnalyze) {
    this.#setStringToAnalyze(stringToAnalyze)
  }

  /**
   * Sets the stringToAnalyze.
   *
   * @param {string} stringToAnalyze – The string to set.
   */
  #setStringToAnalyze (stringToAnalyze) {
    if (typeof stringToAnalyze === 'string') {
      this.#stringToAnalyze = stringToAnalyze

      console.log('Text analyzer ready to use.')

      this.#createWordAnalyzer()
      this.#createCharAnalyzer()
    } else {
      console.log('The text analyzer can only analyze strings. Please provide a string.')

      throw new Error('The text analyzer can only analyze strings. Please provide a string.')
    }
  }

  /**
   * Creates a new instance of WordAnalyzer.
   */
  #createWordAnalyzer () {
    this.#wordAnalyzer = new WordAnalyzer(this.#stringToAnalyze)
  }

  /**
   * Creates a new instance of CharAnalyzer.
   */
  #createCharAnalyzer () {
    this.#charAnalyzer = new CharAnalyzer(this.#stringToAnalyze)
  }

  /**
   * Counts the total number of characters of the words in the string.
   *
   * @returns {number} – The total number of chars of the words in the string.
   */
  #countCharsOfAllWords () {
    let charCountOfAllWords = 0

    for (const word of this.#wordAnalyzer.allWords) {
      charCountOfAllWords += word.length
    }

    return charCountOfAllWords
  }

  /**
   * Finds and returns all unique words sorted in alphabetical order.
   *
   * @returns {Array} - All unique words in lowercase, sorted alphabetically.
   */
  findUniqueWords () {
    const uniqueWordsFreqenzy = this.#wordAnalyzer.uniqueWordsFreqenzy

    const uniqueWords = []

    for (const word in uniqueWordsFreqenzy) {
      uniqueWords.push(word.toLowerCase())
    }

    return uniqueWords.sort()
  }

  /**
   * Counts the total number of words used.
   *
   * @returns {number} – The total number of words.
   */
  countWords () {
    const wordCount = this.#wordAnalyzer.allWords

    return wordCount.length
  }

  /**
   * Counts the number of unique words used.
   *
   * @returns {number} – The number of unique words.
   */
  countUniqueWords () {
    const allUniqueWords = this.findUniqueWords()

    return allUniqueWords.length
  }

  /**
   * Finds the most used words of the string.
   *
   * @param {number} numberOfWords – Number of words to find.
   * @returns {Array} – The most used words in descending order.
   */
  findMostCommonWords (numberOfWords = 10) {
    const allUniqueWords = Object.entries(this.#wordAnalyzer.uniqueWordsFreqenzy)

    if (typeof numberOfWords !== 'number') {
      throw new Error('Passed argument is not a number. Please provide a number of type number.')
    } else if (numberOfWords > allUniqueWords.length) {
      throw new Error('The number is larger than the word count.')
    }

    allUniqueWords.sort((a, b) => b[1].count - a[1].count)

    const mostCommonWords = allUniqueWords.slice(0, numberOfWords).map(word => word[0])

    return mostCommonWords
  }

  /**
   * Finds the longest words of the string.
   *
   * @param { number } numberOfWords – The number of words to find.
   * @returns { string } - The longest words of the analyzed string.
   */
  findLongestWord (numberOfWords = 1) {
    const wordsAndLengts = Object.entries(this.#wordAnalyzer.uniqueWordsLength)

    if (typeof numberOfWords !== 'number') {
      throw new Error('Passed argument is not a number. Please provide a number of type number.')
    } else if (numberOfWords > wordsAndLengts.length) {
      throw new Error('The number is larger than the word count.')
    }

    wordsAndLengts.sort((a, b) => b[1].chars - a[1].chars)

    const longestWord = []

    for (let i = 0; i < numberOfWords; i++) {
      // TODO: Add functionality to check if more than one word has the same length.
      longestWord.push(wordsAndLengts[i][0])
    }

    return longestWord
  }

  /**
   * Finds the shortest words of the string.
   *
   * @param { number } numberOfWords – The number of words to find.
   * @returns { string } - The longest words of the analyzed string.
   */
  findShortestWord (numberOfWords = 1) {
    const wordsAndLengts = Object.entries(this.#wordAnalyzer.uniqueWordsLength)

    if (typeof numberOfWords !== 'number') {
      throw new Error('Passed argument is not a number. Please provide a number of type number.')
    } else if (numberOfWords > wordsAndLengts.length) {
      throw new Error('The number is larger than the word count.')
    }

    wordsAndLengts.sort((a, b) => a[1].chars - b[1].chars)

    const shortestWord = []

    for (let i = 0; i < numberOfWords; i++) {
      // TODO: Add functionality to check if more than one word has the same length.
      shortestWord.push(wordsAndLengts[i][0])
    }

    return shortestWord
  }

  /**
   * Finds the median word length of the words of the string.
   *
   * @returns { number } - The median word length of the words in the string.
   */
  findMedianWordLength () {
    const allWords = this.#wordAnalyzer.allWords
    const allWordLengths = []

    for (const word of allWords) {
      allWordLengths.push(word.length)
    }

    allWordLengths.sort()

    let medianWordLength = 0

    if (allWordLengths.length % 2 === 0) {
      const firstMedianIndex = (allWordLengths.length / 2) - 1
      const secondMedianIndex = allWordLengths.length / 2
      medianWordLength = (allWordLengths[firstMedianIndex] + allWordLengths[secondMedianIndex]) / 2
    } else {
      const medianIndex = Math.ceil(allWordLengths.length / 2) - 1
      medianWordLength = allWordLengths[medianIndex]
    }

    return medianWordLength
  }

  /**
   * Finds the most common word length of the words of the string.
   *
   * @param {number} numberOfWordLengths – The number of word lengths to return.
   * @returns {Array} – The most common word lengths.
   */
  findMostCommonWordLength (numberOfWordLengths = 10) {
    const allWords = this.#wordAnalyzer.allWords

    if (typeof numberOfWordLengths !== 'number') {
      throw new Error('Passed argument is not a number. Please provide a number of type number.')
    } else if (numberOfWordLengths > allWords.length) {
      throw new Error('The number is larger than the unique number of word lengths.')
    }

    const wordLengthCount = {}

    for (const word of allWords) {
      if (wordLengthCount[word.length]) {
        wordLengthCount[word.length].wordCount += 1
      } else {
        wordLengthCount[word.length] = { wordCount: 1 }
      }
    }

    const allWordsAndLengths = Object.entries(wordLengthCount)

    allWordsAndLengths.sort((a, b) => b[1].wordCount - a[1].wordCount)

    const mostCommonWordLengths = allWordsAndLengths.slice(0, numberOfWordLengths).map(word => Number(word[0]))

    return mostCommonWordLengths
  }

  /**
   * Computes the average word length of the string.
   *
   * @returns { number } – The average word length.
   */
  countAverageWordLength () {
    const charCount = this.#countCharsOfAllWords()

    const averageWordLength = (charCount / this.countWords())

    return averageWordLength
  }

  /**
   * Gets the total number of characrers used in the string.
   *
   * @returns { number } – The total number of characrers used in the string.
   */
  countChars () {
    return this.#charAnalyzer.charCount
  }

  /**
   * Gets the total number of characrers, except for whitespace, used in the string.
   *
   * @returns { number } – The total number of characrers but whitespaces used in the string.
   */
  countCharsMinusWhitespace () {
    return this.#charAnalyzer.charCountMinusWhitespace
  }

  /**
   * Finds the most used chars of the string.
   *
   * @param {number} numberOfChars – Number of chars to find.
   * @returns {Array} – The most common chars in descending order.
   */
  findMostCommonChars (numberOfChars = 10) {
    const uniqueCharsFreqenzy = Object.entries(this.#charAnalyzer.uniqueCharsFreqenzy)

    if (typeof numberOfChars !== 'number') {
      throw new Error('Passed argument is not a number. Please provide a number of type number.')
    } else if (numberOfChars > uniqueCharsFreqenzy.length) {
      throw new Error('The number is larger than the char count.')
    }

    uniqueCharsFreqenzy.sort((a, b) => b[1].count - a[1].count)

    const mostCommonChars = uniqueCharsFreqenzy.slice(0, numberOfChars).map(word => word[0])

    return mostCommonChars
  }
}
