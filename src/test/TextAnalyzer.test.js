import { TextAnalyzer } from '../TextAnalyzer.js'

test('Find unique all unique words, in lowercase and sorted alphabetically', () => {
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
