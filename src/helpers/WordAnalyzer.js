/**
 * Module for the class WordAnalyzer.
 *
 * @author Johanna Stenbeck <js226rv@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a word analyzer.
 */
export class WordAnalyzer {
  /**
   * The provided string to analyze.
   *
   * @type {string}
   */
  #stringToAnalyze

  /**
   * All individual words of the string.
   *
   * @type {Array}
   */
  #allWords

  /**
   * Initializes a new instances of the WordAnalyzer class.
   *
   * @param {string} stringToAnalyze - The string to analyze.
   */
  constructor (stringToAnalyze) {
    this.#stringToAnalyze = stringToAnalyze

    console.log('Word analyzer initialized.')

    this.#splitIntoWords()
  }

  /**
   * Splits the string into individual words and adds them to the allWords array.
   */
  #splitIntoWords () {
    const wordsOfString = this.#stringToAnalyze.trim()
      .replaceAll(',', '')
      .replaceAll('.', '')
      .replaceAll('?', '')
      .replaceAll('!', '')
      .replaceAll('-', '')

    this.#allWords = wordsOfString.split(' ')
  }

  /**
   * Returns all words in an array.
   *
   * @returns {Array} – All words from the string.
   */
  get allWords () {
    return this.#allWords
  }
}
