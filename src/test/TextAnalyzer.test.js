import { TextAnalyzer } from '../TextAnalyzer.js'

test('Find unique all unique words, in lowercase and sorted alphabetically.', () => {
  // Arrange and prepare.
  const testText = 'Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.'

  const textAnalyzer = new TextAnalyzer(testText)

  const expectedValue = [
    'att', 'det', 'fyra', 'har', 'hände', 'hänt', 'här', 'i', 'jag', 'klockan', 'kommer', 'malariayra', 'marija', 'ni', 'odessa', 'sa', 'tror', 'var', 'är'
  ]

  // Test.
  const actualValue = textAnalyzer.findUniqueWords()

  // Assert.
  expect(actualValue).toEqual(expectedValue)
}
)

test('Count all words.', () => {
  // Arrange and prepare.
  const testText = 'Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.'

  const textAnalyzer = new TextAnalyzer(testText)

  const expectedValue = 22

  // Test.
  const actualValue = textAnalyzer.countWords()

  // Assert.
  expect(actualValue).toEqual(expectedValue)
}
)

test('Count unique words.', () => {
  // Arrange and prepare.
  const testText = 'Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.'

  const textAnalyzer = new TextAnalyzer(testText)

  const expectedValue = 6

  // Test.
  const actualValue = textAnalyzer.countUniqueWords()

  // Assert.
  expect(actualValue).toEqual(expectedValue)
}
)

test('Find the 3 most common words.', () => {
  // Arrange and prepare.
  const testText = 'Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.'

  const textAnalyzer = new TextAnalyzer(testText)

  const expectedValue = ['ett', 'två', 'fyra']

  // Test.
  const actualValue = textAnalyzer.findMostCommonWords(3)

  // Assert.
  expect(actualValue).toEqual(expectedValue)
}
)

test('Find the 33 most common words.', () => {
  // Arrange and prepare.
  const testText = 'Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.'

  const textAnalyzer = new TextAnalyzer(testText)

  // Test and assert.
  expect(() => {
    textAnalyzer.findMostCommonWords(33)
  }).toThrow('The number is larger than the word count.')
}
)

test('Find the 5 longest words.', () => {
  // Arrange and prepare.
  const testText = 'Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.'

  const textAnalyzer = new TextAnalyzer(testText)

  const expectedValue = ['malariayra', 'klockan', 'odessa', 'kommer', 'marija']

  // Test.
  const actualValue = textAnalyzer.findLongestWord(5)

  // Assert.
  expect(actualValue).toEqual(expectedValue)
}
)

test('Find the 55 longest words.', () => {
  // Arrange and prepare.
  const testText = 'Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.'

  const textAnalyzer = new TextAnalyzer(testText)

  // Test and assert.
  expect(() => {
    textAnalyzer.findLongestWord(55)
  }).toThrow('The number is larger than the word count.')
}
)

test('Find the 5 shortest words of string with more than 55 words.', () => {
  // Arrange and prepare.
  const testText = 'Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.'

  const textAnalyzer = new TextAnalyzer(testText)

  const expectedValue = ['i', 'ni', 'är', 'sa', 'att']

  // Test.
  const actualValue = textAnalyzer.findShortestWord(5)

  // Assert.
  expect(actualValue).toEqual(expectedValue)
}
)

test('Find the 55 shortest words of string with less than 55 words.', () => {
  // Arrange and prepare.
  const testText = 'Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.'

  const textAnalyzer = new TextAnalyzer(testText)

  // Test and assert.
  expect(() => {
    textAnalyzer.findShortestWord(55)
  }).toThrow('The number is larger than the word count.')
}
)

test('Find the median word length of string with even word count.', () => {
  // Arrange and prepare.
  const testText = 'Tror ni att det här är malariayra?'

  const textAnalyzer = new TextAnalyzer(testText)

  const expectedValue = 3

  // Test.
  const actualValue = textAnalyzer.findMedianWordLength()

  // Assert.
  expect(actualValue).toEqual(expectedValue)
}
)
