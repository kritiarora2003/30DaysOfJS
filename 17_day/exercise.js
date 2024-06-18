//////////////////////// EXERCISE LEVEL 1
// 1
console.clear()
localStorage.setItem('name', 'jane')
localStorage.setItem('last name', 'doe')
localStorage.setItem('age', 21)
localStorage.setItem('country', 'india')
localStorage.setItem('city', 'mohenjodaro')
console.log(localStorage)


///////////////////////// EXERCISE LEVEL 2
// 1
class student {
    constructor(fname, lname, age, skills, country) {
        this.fname = fname,
        this.lname = lname, 
        this.age = age,
        this.skills = skills, 
        this.country = country
    }
}

let bacchi = new student('jane', 'doe', 21, ['kuch', 'kuch', 'kuch nhi'], 'india')
console.log(bacchi)

// abhi isko localstorage me daalna hai toh stringify karna hoga
let studentjson = JSON.stringify(bacchi)
localStorage.setItem('bacchi', studentjson)
console.log(localStorage.getItem('bacchi'))


//////////////////////// EXERCISE LEVEL 3
// 1
// mann ni kr rha