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
}
