// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

// const numbers = [1, 2, 3]
// let [numOne, numTwo, numThree] = numbers
// console.log(numOne, numTwo, numThree)


// to skip some values
const numbers = [1, 2, 3]
let [numOne, , numThree] = numbers //2 is omitted
console.log(numOne, numThree)


// We can not assign variable to all the elements in the array. 
// We can destructure few of the first
// and we can get the remaining as array using spread operator(...).
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3)
console.log(rest)


// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. 
// See the example below.
// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200
// }
// let { width, height, area, perimeter } = rectangle
// console.log(width, height, area, perimeter)

// renaming
const rectangle = {
    width: 20,
    height: 10,
    area: 200
}
let { width: w, height: h, area: a, perimeter: p } = rectangle
console.log(w, h, a, p)
const calculatePerimeter = ({ width, height }) => {
    return 2 * (width + height)
}  
// console.log(calculatePerimeter(rect)) // 60


// destructuring object during iteration
const todoList = [
    {
      task:'Prepare JS Test',
      time:'4/1/2020 8:30',
      completed:true
    },
    {
      task:'Give JS Test',
      time:'4/1/2020 10:00',
      completed:false
    },
    {
      task:'Assess Test Result',
      time:'4/1/2020 1:00',
      completed:false
    }
]

for (const {task, time, completed} of todoList){
    console.log(task, time, completed)
}


// Spread operator to copy array
const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]


// Modifying or changing the object while copying
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
}

const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)


// spread operator for unlimited arguements for arrow function
const sumAllNums = (...args) => {
    console.log(args)
}
sumAllNums(1, 2, 3, 4, 5)


