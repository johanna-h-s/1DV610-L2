/**
 * Module for the class CharAnalyzer.
 *
 * @author Johanna Stenbeck <js226rv@student.lnu.se>
 * @version 1.0.0
 */

/**
 * Represents a character analyzer.
 */
export class CharAnalyzer {
  /**
   * The provided string to analyze.
   *
   * @type {string}
   */
  #stringToAnalyze

  /**
   * The total number of characters used in the string.
   *
   * @type {number}
   */
  #charCount

  /**
   * The number of characters, except for whitespace, used in the string.
   *
   * @type {number}
   */
  #charCountMinusWhitespace

  /**
   * Initializes a new instances of the CharAnalyzer class.
   *
   * @param {string} stringToAnalyze - The string to analyze.
   */
  constructor (stringToAnalyze) {
    this.#stringToAnalyze = stringToAnalyze

    console.log('Char analyzer initialized.')

    this.#countChars()
    this.#countCharsMinusWhitespace()
  }

  /**
   * Counts all characters of the string.
   */
  #countChars () {
    this.#charCount = this.#stringToAnalyze.length
  }

  /**
   * Counts all characters but whitespaces of the string.
   */
  #countCharsMinusWhitespace () {
    const stringWithoutWhitespace = this.#stringToAnalyze.replaceAll(' ', '')

    this.#charCountMinusWhitespace = stringWithoutWhitespace.length
  }

  /**
   * Returns character count.
   *
   * @returns {number} – The number of characters used in the string.
   */
  get charCount () {
    return this.#charCount
  }

  /**
   * Returns character, without whitespace, count.
   *
   * @returns {number} – The number of characters used in the string.
   */
  get charCountMinusWhitespace () {
    return this.#charCountMinusWhitespace
  }
}
