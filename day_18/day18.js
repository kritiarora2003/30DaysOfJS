
// Promises are extensively used in real-life applications to handle asynchronous operations such as API requests, file operations, or any other tasks that take time to complete.


// callback is taken as arguement

const doSomething = (callback) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback(true, skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err+'true')
    }
    return console.log(result)
  }
  
  doSomething(callback)



  // Promise
let doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.length > 0) {
        resolve(skills)
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.log(error))


// Promise
doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      if (skills.includes('Node')) {
        resolve('fullstack developer')
      } else {
        reject('Something wrong has happened')
      }
    }, 2000)
  })
  
  doPromise
    .then(result => {
      console.log(result)
    })
    .catch(error => console.error(error))




// const url = "https://jsonplaceholder.typicode.com/todos/1" 
// fetch(url)
//     .then(response => response.json()) // accessing the API data as JSON
//     .then(data => {
//     // getting the data
//     console.log(data)
//     })
//     .catch(error => console.error(error))


// API for get requests
let fetchRes = fetch(
    "https://jsonplaceholder.typicode.com/todos/1");
        
    // FetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            console.log(d)
        })


let url = 'https://official-joke-api.appspot.com/random_joke'
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
    // getting the data
    console.log(data)
    })
    .catch(error => console.error(error))

    
    url = '    https://api.wheretheiss.at/v1/satellites/25544'
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
    // getting the data
    console.log(data)
    })
    .catch(error => console.error(error))


url = 'https://api.thecatapi.com/v1/breeds' 
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.error(err)
    }
}
console.log('===== async and await')
fetchData()


////////////////////// async and await
const getData = async () => {
    let y = await "Hello World";
    console.log(y);
}

console.log(1);
getData();
console.log(2);


