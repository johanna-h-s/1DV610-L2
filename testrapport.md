# Test report

## Tests of class TextAnalyzer
| Function | TC | Test type | Test result |
| -------- | ------- | ------- | ------- |
| findUniqueWords() | TC1 | Jest unit test | Pass |
| countWords() | TC1 | Jest unit test | Pass |
| countUniqueWords() | TC1 | Jest unit test | Pass |
| findMostCommonWords() | TC1 | Jest unit test | Pass |
| findMostCommonWords() | TC2 | Jest unit test | Pass |
| findLongestWord() | TC1 | Jest unit test | Pass |
| findLongestWord() | TC2 | Jest unit test | Pass |
| findShortestWord() | TC1 | Jest unit test | Pass |
| findShortestWord() | TC2 | Jest unit test | Pass |
| findMedianWordLength() | TC1 | Jest unit test | Pass |
| findMedianWordLength() | TC2 | Jest unit test | Pass |
| findMostCommonWordLength() | TC1 | Jest unit test | Pass |
| findMostCommonWordLength() | TC2 | Jest unit test | Pass |

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
Find the 11 most common word length of string with less than 11 different word lengths.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
11

**Expected value:**\
Thrown error: 'The number is larger than the unique number of word lengths.'

---

### Unit test/s content of countAverageWordLength()
**TEST CASE 1**\
Find the average word length.

**Test string:**\
Tror ni att det här är malariayra? Det har hänt. Det var i Odessa det hände. "Jag kommer klockan fyra" - sa Marija.

**Argument:**\
1

**Expected value:**\
[3]

/
