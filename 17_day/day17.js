localStorage
localStorage.setItem('firstname', 'kriti')
console.log(localStorage.getItem('firstname'))

// Storing an array in a localStorage. If we are storing an array, an object or object array, we should stringify the object first. 

let skills = ['HTML', 'CSS', 'JS', 'React']
//Skills array has to be stringified first to keep the format.
const skillsJSON = JSON.stringify(skills, undefined, 4)
localStorage.setItem('skills', skillsJSON)
console.log(localStorage)

skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
  let skillJSON = JSON.stringify(skills)
  localStorage.setItem('skills', skillJSON)

  console.log(localStorage)


  // getting items from localstorage
  skills = localStorage.getItem('skills')
  console.log(skills)

let skillsObj = JSON.parse(skills, undefined, 4)
console.log(skillsObj)

localStorage.clear()
console.log(localStorage)