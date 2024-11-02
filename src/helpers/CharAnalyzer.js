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
   * All individual characters of the string.
   *
   * @type {Array}
   */
  #allChars

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
   * All unique chars of the string and their frequenzy of use.
   *
   * @type {object}
   */
  #uniqueCharsFrequenzy

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

    this.#countCharFrequency()
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
   * Splits the string into individual characters and adds them to the allChars array.
   */
  #splitIntoChars () {
    this.#allChars = []

    for (let i = 0; i < this.#stringToAnalyze.length; i++) {
      this.#allChars.push(this.#stringToAnalyze.slice(i, i + 1))
    }
  }

  /**
   * Counts the frequenzy of all words.
   */
  #countCharFrequency () {
    this.#splitIntoChars()

    this.#uniqueCharsFrequenzy = {}

    // Iterate over the chars of #allChars.
    for (let i = 1; i < this.#allChars.length; i++) {
      const char = this.#allChars[i]
      let duplicate = false

      // Traverse the unique chars of uniqueCharsFrequenzy.
      for (const uniqueChar in this.#uniqueCharsFrequenzy) {
        if (char === uniqueChar) {
          this.#uniqueCharsFrequenzy[uniqueChar].count += 1
          duplicate = true
        }
      }

      // Add char and set char count to 1 if not found in uniqueCharsFrequenzy.
      if (!duplicate) {
        this.#uniqueCharsFrequenzy[char] = { count: 1 }
      }
    }
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

  /**
   * Returns all unique characters and their frequenzy.
   *
   * @returns {object} – All unique characters in order of appearance and their frequenzy of use.
   */
  get uniqueCharsFreqenzy () {
    return this.#uniqueCharsFrequenzy
  }
}
