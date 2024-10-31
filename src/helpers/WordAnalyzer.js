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
   * All unique words of the string and their frequenzy of use.
   *
   * @type {Array}
   */
  #uniqueWordsFrequenzy

  /**
   * Initializes a new instances of the WordAnalyzer class.
   *
   * @param {string} stringToAnalyze - The string to analyze.
   */
  constructor (stringToAnalyze) {
    this.#stringToAnalyze = stringToAnalyze

    console.log('Word analyzer initialized.')

    this.#splitIntoWords()
    this.#findWordFrequency()
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
   * Counts the frequenzy of all words.
   */
  #findWordFrequency () {
    // Reset and add first word to the uniqueWordCount object.
    this.#uniqueWordsFrequenzy = {
      [`${this.#allWords[0]}`]: { count: 1 }
    }

    // Iterate over the words of class property #allWords.
    for (let i = 1; i < this.#allWords.length; i++) {
      const word = this.#allWords[i]
      let duplicate = false

      // Traverse the unique words of uniqueWordCount.
      for (const uniqueWord in this.#uniqueWordsFrequenzy) {
        if (word === uniqueWord) {
          this.#uniqueWordsFrequenzy[uniqueWord].count += 1
          duplicate = true
        }
      }

      // Add word and set word count to 1 if not found in uniqueWordCount.
      if (!duplicate) {
        this.#uniqueWordsFrequenzy[word] = { count: 1 }
      }
    }
  }

  /**
   * Returns all words as an array.
   *
   * @returns {Array} – All words from the string.
   */
  get allWords () {
    return this.#allWords
  }

  /**
   * Returns all unique words and their frequenzy.
   *
   * @returns {object} – All unique words in order of appearance and their frequenzy of use.
   */
  get uniqueWordsFreqenzy () {
    return this.#uniqueWordsFrequenzy
  }
}
