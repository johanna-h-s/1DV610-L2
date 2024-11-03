# Test report

## Test results
Version 1.0.0

![Alt text](/src/test/testresult/test-result-2024-11-03.png "a title")

## Tests of class TextAnalyzer
| Function | TC | Test type | Test result |
| -------- | ------- | ------- | ------- |
| new TextAnalyzer() | TC1 | Jest unit test | Pass |
| findUniqueWords() | TC1 | Jest unit test | Pass |
| countWords() | TC1 | Jest unit test | Pass |
| countUniqueWords() | TC1 | Jest unit test | Pass |
| findMostCommonWords() | TC1 | Jest unit test | Pass |
| findMostCommonWords() | TC2 | Jest unit test | Pass |
| findMostCommonWords() | TC3 | Jest unit test | Pass |
| findMostCommonWords() | TC4 | Jest unit test | Pass |
| findLongestWord() | TC1 | Jest unit test | Pass |
| findLongestWord() | TC2 | Jest unit test | Pass |
| findLongestWord() | TC3 | Jest unit test | Pass |
| findLongestWord() | TC4 | Jest unit test | Pass |
| findShortestWord() | TC1 | Jest unit test | Pass |
| findShortestWord() | TC2 | Jest unit test | Pass |
| findShortestWord() | TC3 | Jest unit test | Pass |
| findShortestWord() | TC4 | Jest unit test | Pass |
| findMedianWordLength() | TC1 | Jest unit test | Pass |
| findMedianWordLength() | TC2 | Jest unit test | Pass |
| findMostCommonWordLength() | TC1 | Jest unit test | Pass |
| findMostCommonWordLength() | TC2 | Jest unit test | Pass |
| findMostCommonWordLength() | TC3 | Jest unit test | Pass |
| findMostCommonWordLength() | TC4 | Jest unit test | Pass |
| countAverageWordLength() | TC1 | Jest unit test | Pass |
| countChars() | TC1 | Jest unit test | Pass |
| countCharsMinusWhitespace() | TC1 | Jest unit test | Pass |
| findMostCommonChars() | TC1 | Jest unit test | Pass |
| findMostCommonChars() | TC2 | Jest unit test | Pass |
| findMostCommonChars() | TC3 | Jest unit test | Pass |
| findMostCommonChars() | TC4 | Jest unit test | Pass |

---

### Unit test/s content of new TextAnalyzer()
**TEST CASE 1**\
Initialize TextAnalyzer with a number.

**Argument:**\
3

**Expected value:**\
Thrown error: 'The text analyzer can only analyze strings. Please provide a string.'

---

### Unit test/s content of findUniqueWords()
**TEST CASE 1**\
Find all unique words, in lowercase and sorted alphabetically.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
N/A

**Expected value:**\
[ 'att', 'det', 'fyra', 'har', 'hände', 'hänt', 'här', 'i', 'jag', 'klockan', 'kommer', 'malariayra', 'marija', 'ni', 'odessa', 'sa', 'tror', 'var', 'är' ]

---

### Unit test/s content of countWords()
**TEST CASE 1**\
Count all words.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
N/A

**Expected value:**\
22

---

### Unit test/s content of countUniqueWords()
**TEST CASE 1**\
Count unique words.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\
N/A

**Expected value:**\
6

---

### Unit test/s content of findMostCommonWords()
**TEST CASE 1**\
Find the 3 most common words.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\
3

**Expected value:**\
['ett', 'två', 'fyra']

/

**TEST CASE 2**\
Find the 33 most common words.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\
33

**Expected value:**\
Thrown error: 'The number is larger than the word count.'

/

**TEST CASE 3**\
Pass a string as an argument to find the most common word/s.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\
'tre'

**Expected value:**\
Thrown error: 'Passed argument is not a number. Please provide a number of type number.'

/

**TEST CASE 4**\
Find the most common words without passing any argument.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\


**Expected value:**\
['ett', 'två']

---

### Unit test/s content of findLongestWord()
**TEST CASE 1**\
Find the 5 longest words.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
5

**Expected value:**\
['malariayra', 'klockan', 'odessa', 'kommer', 'marija']

/

**TEST CASE 2**\
Find the 55 longest words.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
55

**Expected value:**\
Thrown error: 'The number is larger than the word count.'

/

**TEST CASE 3**\
Pass a string as an argument to find the longest word/s.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\
'tre'

**Expected value:**\
Thrown error: 'Passed argument is not a number. Please provide a number of type number.'

/

**TEST CASE 4**\
Find the longest words without passing any argument.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\


**Expected value:**\
['malariayra']

---

### Unit test/s content of findShortestWord()
**TEST CASE 1**\
Find the 5 shortest words.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
5

**Expected value:**\
['i', 'ni', 'är', 'sa', 'att']

/

**TEST CASE 2**\
Find the 55 shortest words.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
55

**Expected value:**\
Thrown error: 'The number is larger than the word count.'

/

**TEST CASE 3**\
Pass a string as an argument to find the shortest word/s.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\
'tre'

**Expected value:**\
Thrown error: 'Passed argument is not a number. Please provide a number of type number.'

/

**TEST CASE 4**\
Find the shortest words without passing any argument.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\


**Expected value:**\
['i']

---

### Unit test/s content of findMedianWordLength()
**TEST CASE 1**\
Find the median word length of string with even word count.

**Test string:**\
'Tror ni att det här är malariayra?'

**Argument:**\
N/A

**Expected value:**\
3

/

**TEST CASE 2**\
Find the median word length of string with uneven word count.

**Test string:**\
'Tror ni att det här är malariayra? Det har hänt.'

**Argument:**\
N/A

**Expected value:**\
3

---

### Unit test/s content of findMostCommonWordLength()
**TEST CASE 1**\
Find the most common word length.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
1

**Expected value:**\
[3]

/

**TEST CASE 2**\
Find the 11 most common word lengths of string with less than 11 different word lengths.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
11

**Expected value:**\
Thrown error: 'The number is larger than the unique number of word lengths.'

/

**TEST CASE 3**\
Pass a string as an argument to find the most common word lengt/s.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\
'tre'

**Expected value:**\
Thrown error: 'Passed argument is not a number. Please provide a number of type number.'

/

**TEST CASE 4**\
Find the most common word lengt/s without passing any argument

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\


**Expected value:**\
[3]

---

### Unit test/s content of countAverageWordLength()
**TEST CASE 1**\
Find the average word length.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
N/A

**Expected value:**\
3.2

---

### Unit test/s content of countChars()
**TEST CASE 1**\
Count all characters, including whitespace.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände.

**Argument:**\
N/A

**Expected value:**\
76

---

### Unit test/s content of countCharsMinusWhitespace()
**TEST CASE 1**\
Count all characters, except for whitespace.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände.

**Argument:**\
N/A

**Expected value:**\
61

---

### Unit test/s content of findMostCommonChars()
**TEST CASE 1**\
Find the 5 most common characters, sorted in order of frequenzy.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände.

**Argument:**\
5

**Expected value:**\
[' ', 'r', 'a', 't', 'e']

/

**TEST CASE 2**\
Find the 55 most common characters of string with less than 55 unique characters.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände.

**Argument:**\
55

**Expected value:**\
Thrown error: 'The number is larger than the unique character count.'

/

**TEST CASE 3**\
Pass a string as an argument to find the most common character/s.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\
'tre'

**Expected value:**\
Thrown error: 'Passed argument is not a number. Please provide a number of type number.'

/

**TEST CASE 4**\
Find the most common character/s without passing any argument.

**Test string:**\
Ett! ett. ett ett. Två, två, två. :) Tre. 3. Fyra. Fyra. Fem! Fém.

**Argument:**\


**Expected value:**\
[' ']

---
