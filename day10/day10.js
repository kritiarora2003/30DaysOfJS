function print(a) {
    console.log(a)
}

// creating an empty set 
// A set contains unique elements
const s = new Set();
print(s)

const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
  ]
  
  const setOfLanguages = new Set(languages)
  
// adding an element to the set
setOfLanguages.add('hindi')
print(setOfLanguages)
for (const language of setOfLanguages) {
    console.log(language)
}


// deleting an element from the set
setOfLanguages.delete('English')
print(setOfLanguages)


// checking if an element is there in the set
print(setOfLanguages.has('hindi'))


// clearing the set
setOfLanguages.clear()


// To find a union to two sets can be achieved using spread operator. 
// Lets find the union of set A and set B (A U B)

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let c = [...a, ...b]

// let A = new Set(a)
// let B = new Set(b)
// let C = new Set(c)

// console.log(C)

// To find an intersection of two sets can be achieved using filter. 
// Lets find the intersection of set A and set B (A ∩ B)
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)


// Difference of sets
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => !B.has(num))
let C = new Set(c)

console.log(C)


/////////////////////////////////// MAP
// creating an empty map
const map = new Map();
print(map);

// // creating map from array
// const mapp = new Map(<array name>)
// print(mapp)

// adding values in map
map.set(1,3)
map.set(4,5)
print(map)

// getting value from map
print(map.get(1)) // 3

// checking if map has a key
print(map.has(3)) // false

// getting all values from map
for (const country of map) {
    console.log(country)
  }