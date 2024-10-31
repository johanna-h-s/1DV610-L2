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
   * Initializes a new instances of the WordAnalyzer class.
   *
   * @param {string} stringToAnalyze - The string to analyze.
   */
  constructor (stringToAnalyze) {
    this.#stringToAnalyze = stringToAnalyze

    console.log('Word analyzer initialized.')
  }
}
