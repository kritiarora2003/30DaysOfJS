// [a-c] means, a or b or c
// [a-z] means, any letter a to z
// [A-Z] means, any character A to Z
// [0-3] means, 0 or 1 or 2 or 3
// [0-9] means any number 0 to 9
// [A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
// \: uses to escape special characters
// \d mean: match where the string contains digits (numbers from 0-9)
// \D mean: match where the string does not contain digits
// . : any character except new line character(\n)
// ^: starts with
// r'^substring' eg r'^love', a sentence which starts with a word love
// r'[^abc] mean not a, not b, not c.
// $: ends with
// r'substring$' eg r'love$', sentence ends with a word love
// *: zero or more times
// r'[a]*' means a optional or it can occur many times.
// +: one or more times
// r'[a]+' means at least once or more times
// ?: zero or one times
// r'[a]?' means zero times or once
// \b: word bounder, matches with the beginning or ending of a word
// {3}: Exactly 3 characters
// {3,}: At least 3 characters
// {3,8}: 3 to 8 characters
// |: Either or
// r'apple|banana' mean either of an apple or a banana
// (): Capture and group


// regex are used to find patterns in data.
// we knew this from TOC1 and STT1

// flags
// g: a global flag which means looking for a pattern in whole text
// i: case insensitive flag(it searches for both lowercase and uppercase)
// m: multiline

// creating a pattern using the regex constructor
let pattern90 = 'love'
let flag = 'gi'
let regEx = new RegExp(pattern90, flag)

// without the regex constructor
let regEx2 = /love/gi

// testing
const str = 'I lOve JavaScript'
const pattern2 = /love/i
let result = pattern2.test(str)
console.log(result)

// matching returns the array
result = str.match(pattern2)
console.log(result)
// ["love", index: 2, input: "I love JavaScript", groups: undefined]

// search returns the index of the match
result = str.search(pattern2)
console.log(result)

// replacing 
const txt2 = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt2.replace(/Python|python/g, 'JavaScript')
console.log(matchReplaced)


// const txt = 'I am not sure if there is a convention how to write the word e-mail.\
// Some people write it email others may write it as Email or E-mail.'
// const pattern3 = /[Ee]-?mail/g  // ? means optional
// matches = txt.match(pattern3)

// console.log(matches)  // ["e-mail", "email", "Email", "E-mail"]



// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\b\w{4}\b/g  //  exactly four character words
// const matches = txt.match(pattern)
// console.log(matches)  //['This', 'made', '2019']

// if i dont put the first \b then it will return the last 4 digits of any word. 
// if i dont put the last \b then it will return the first 4 digits of any word.
// if i dont put both then it will return both of above

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern4 = /\b[a-zA-Z]{4}\b/g  //  exactly four character  words without numbers
// const matches = txt.match(pattern4)
// console.log(matches)  //['This', 'made']

// // Starts with
// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /^This/ // ^ means starts with
// const matches = txt.match(pattern)
// console.log(matches)  // ['This']

// Negation
const txt = 'This regular expression example was made in December 6,  2019.'
const pattern = /[^A-Za-z,. ]+/g  // ^ in set character means negation, not A to Z, not a to z, no space, no comma no period
const matches = txt.match(pattern)
console.log(matches)  // ["6", "2019"]


// Exact match
// It should have ^ starting and $ which is an end.