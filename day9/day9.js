// // a callback function, the name of the function could be any name
// const callback = (n) => {
//     return n ** 2
// }

// // function that takes other function as a callback
// function cube(callback, n) {
//     return callback(n) * n
// }
// console.log(cube(callback, 3))

// // pehele callback ne 3 square 9 calculate kiya, fir cube ne usme into 3 kar diya
// // cube function banaya square function use karke



// // Higher order function returning an other function
// const higherOrder = n => {
//     const doSomething = m => {
//         const doWhatEver = t => {
//                 return 2 * n + 3 * m + t
//             }
//         return doWhatEver
//     }
//     return doSomething
// }
// console.log(higherOrder(2)(3)(10))




// const numbers = [1, 2, 3, 4, 5]
// const sumArray = arr => {
//   let sum = 0
//   const callback = function(element) {
//     sum += element
//   }
//   arr.forEach(callback)
//   return sum

// }
// console.log(sumArray(numbers))
// // forEach jo hai vo calls the function callback for each element in the array
// // callback jo hai vo har element le leke sum me add karta jata hai
// // toh sumarray function me callback function hai uska baccha



// /////////////////// TIMING THINGS

// function sayHello() {
//     console.log('Hello')
//   }
//   setInterval(sayHello, 1000) 
//   // it prints hello in every second, 1000ms is 1s

//   function sayHello() {
//     console.log('Hello')
//   }
//   setTimeout(sayHello, 2000) 
//   // it prints hello after it waits for 2 seconds.




// ////////////////////////// FUNCTIONAL PROGRAMMING
// // forEach ke andar jo bhi daaloge usko vo har element ke liye chala dega bas
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// numbers.forEach(function (ele) {
//     sum += ele
// })
// console.log(sum);


// // map returns a new array
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)
// console.log(names)

// // map returns a new array with the results of the function, 
// // while forEach does not return anything and only modifies the original array



// // Filter: Filter out items which full fill filtering conditions and return a new array.
// //Filter countries containing land
// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]
// const countriesContainingLand = countries.filter((country) =>
//     country.includes('land')
//   )
//   console.log(countriesContainingLand)
// // ans = finland, ireland


// // reduce
// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((acc, cur) => acc + cur, 0)
// console.log(sum)
// // it is good practice to specify an initial value for the accumulator
// // otherwise js will throw an error if array is empty


// // every: Check if all the elements are similar in one aspect. It returns boolean
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

// console.log(areAllStr)


// // find: Return the first element which satisfies the condition
// const ages = [24, 22, 25, 32, 35, 18]
// const age = ages.find((age) => age < 20)

// console.log(age)
// // findIndex: Return the position of the first element which satisfies the condition


// // some: Check if some of the elements are similar in one aspect. It returns boolean
// const bools = [true, true, false, true]
// const areSomeTrue = bools.some((b) =>  b === true)
// console.log(areSomeTrue) //true


// sort modifies the original array
// just array.sort works well on strings as sort takes input as strings
// to sort numbers
const numbers = [9.81, 3.14, 100, 37]
// Using sort method to sort number items provide a wrong result. see below
console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
numbers.sort(function (a, b) {
  return a - b
})

console.log(numbers) // [3.14, 9.81, 37, 100]

numbers.sort(function (a, b) {
  return b - a
})
console.log(numbers) //[100, 37, 9.81, 3.14]