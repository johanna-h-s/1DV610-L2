/**
 * Module for the class TextAnalyzer.
 *
 * @author Johanna Stenbeck <js226rv@student.lnu.se>
 * @version 1.0.0
 */

import { WordAnalyzer } from './helpers/WordAnalyzer.js'

/**
 * Represents a text analyzer.
 */
export class TextAnalyzer {
  #stringToAnalyze
  #wordAnalyzer

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
  findMostUsedWords (numberOfWords = 10) {
    if (typeof numberOfWords !== 'number') {
      console.log('Please provide a number of type number to use findMostUsedWords.')
    }

    const allUniqueWords = Object.entries(this.#wordAnalyzer.uniqueWordsFreqenzy)

    allUniqueWords.sort((a, b) => b[1].count - a[1].count)

    const mostUsedWords = allUniqueWords.slice(0, numberOfWords).map(word => word[0])

    return mostUsedWords
  }
}
