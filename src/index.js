/**
 * The main script file of the application.
 *
 * @author Johanna Stenbeck <js226rv@student.lnu.se>
 * @version 1.1.0
 */

import { WordAnalyzer } from './helpers/WordAnalyzer.js'

const textToAnalyze = "Your thought, Fantasizing on a sodden brain, Like a bloated lackey on a greasy couch sprawling, With my heart's bloody tatters, I'll mock it again. Until I'm contempt, I'll be ruthless and galling."

const wordAnalyzer = new WordAnalyzer(textToAnalyze)

console.log(wordAnalyzer.allWords)
console.log(wordAnalyzer.uniqueWordsFreqenzy)
console.log(wordAnalyzer.uniqueWordsLength)
