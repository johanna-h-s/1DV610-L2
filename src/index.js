/**
 * The main script file of the tiny text analyzer.
 *
 * @author Johanna Stenbeck <js226rv@student.lnu.se>
 * @version 1.1.0
 */

import { TextAnalyzer } from './TextAnalyzer.js'

const textToAnalyze = "Your thought, Fantasizing on a sodden brain, Like a bloated lackey on a greasy couch sprawling, With my heart's bloody tatters, I'll mock it again. Until I'm contempt, I'll be ruthless and galling."
const numberToTry = 4

const textAnalyzer = new TextAnalyzer(textToAnalyze)

console.log(textAnalyzer.findUniqueWords())
console.log(textAnalyzer.countWords())
console.log(textAnalyzer.countUniqueWords())
console.log(textAnalyzer.findMostUsedWords(4))
console.log(textAnalyzer.findLongestWord(2))
console.log(textAnalyzer.findMostCommonWordLength(2))
console.log(textAnalyzer.countAverageWordLength())
console.log(textAnalyzer.countChars())
console.log(textAnalyzer.countCharsMinusWhitespace())
