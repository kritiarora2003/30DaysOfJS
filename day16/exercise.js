const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`


////////////////////////////// EXERCISE LEVEL 1
// 1
let ans = JSON.stringify(skills, undefined, 4)
console.log(ans)

// 2
age = JSON.stringify(age)
console.log(age)
console.log(typeof(age)) // console output: string

// 3
isMarried = JSON.stringify(isMarried)
console.log(isMarried)
console.log(typeof(isMarried)) // output : string

// 4
let studentstring = JSON.stringify(student, undefined, 4)
console.log(studentstring)


/////////////////////////////// EXERCISE LEVEL 2
// 1
studentstring = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4)
console.log(studentstring)


////////////////////////////// EXERCISE LEVEL 3
// 1
let txtToObj = JSON.parse(txt)
console.log(txtToObj)

// 2
// abhi txt ka object ban gya na, ab usme se max skills wale to output karo
function userWithMaxSkills(users) {
    let count = 0;
    let ans;
    for (i in users) {
        if (users[i].skills.length > count) {
            count = users[i].skills.length
            ans = i
        }
    }
    return ans;
}
console.log(userWithMaxSkills(txtToObj))
// above is a very c++ approach and not a js approach,
// lekin ek traversal me ans nikal diya aur kya chahiye
// i hope to use more funcitons like foreach, map, and reduce
// attempt at doing so is below

function attempt2userWithMaxSkills(users) {
    let count = 0, ans;
    Object.keys(users).forEach(element => {
        if (users[element].skills.length > count) {
            count = users[element].skills.length
            ans = element
        }
    });
    console.log(ans)
}
attempt2userWithMaxSkills(txtToObj)

// yeah above works
// still feels a little like cheating though