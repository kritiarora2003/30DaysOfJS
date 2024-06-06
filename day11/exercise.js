print = (...a) => console.log(a)

/////////////////////// EXERCISE LEVEL 1
print(constants) // works

// 1
const [e, pi, g, bodytemp, boiling] = constants
print(e,pi,g,bodytemp,boiling)
// [2.72, 3.14, 9.81, 37, 100]
// with comma separated multiple arguements to the print function
// the unmilited arrow function paramenters converts it to an array
// therefore it does not work exactly console.log
// if you have multiple arguements then its better to use console.log
// i cant believe i havent needed to print multiple arguements till now
// dang sis
console.log(e,pi,g,bodytemp,boiling)
// 2.72 3.14 9.81 37 100


// 3
const {width: w, height: h, area: a, perimeter: p} = rectangle
console.log(w,h,a,p)


/////////////////////////// EXERCISE LEVEL 2
// 1
for (user of users) {
    let {name, scores, skills, age} = user
    // parameters ka name object ki key ke naam se same hona chahiye
    console.log(name, scores, skills, age)
}

// 2
for (user of users) {
    let {name, scores, skills, age} = user
    // parameters ka name object ki key ke naam se same hona chahiye
    if (skills.length < 2)
        console.log(name)
}



//////////////////////// EXERCISE LEVEL 3
// 1
// print(countries_data) // works

// 2
// const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
// let [name, skills, scores] = student
// console.log(name, skills, scores)
// let [, ,jsScore, ReactScore] = scores
// console.log(name, skills, jsScore, ReactScore)


// 1
// function convertArrayToObject(array) {
//     let newarray = []
//     for (student of students) {
//         let [name, skills, scores] = student
//         newarray.push({
//             name: name,
//             skills: skills,
//             scores: scores
//         })
//     }
//     return newarray
// }
// console.log(convertArrayToObject(students))

// 3
const student = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }
let newStudent = {...student};

print(newStudent)
let {skills}= newStudent
let {frontEnd, backEnd, dataBase, dataScience} = skills
frontEnd.push({
    skill: 'Bootstrap',
    level: 8
})
backEnd.push({
    skill: 'Express',
    level: 9
})
dataBase.push({
    skill: 'SQL',
    level: 8
})
dataScience.push({
    skill: 'SQL'
})

console.log(newStudent)
