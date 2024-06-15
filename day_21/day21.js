// An HTMLCollection is an array like object of HTML elements.



// getting elements by tag
let allTitles = document.getElementsByTagName('h1')
console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
  }

console.log('type of getelementbytag '+ typeof(allTitles)) // object

////////////////////////////////////// NOTES 
// jab html file me script head me thi tab allTitles.length 0 aa rha tha
// pucho kyu
// kyuki tab h1 tags tak pohoche hi nahi the, khali head pe the
// lekin jab script ko sabse last me dala tab sahi ane laga
// toh html doc ke pehele script load ho gyi galti se

// just read on stackoverflow that keep your scripts just before you need them, no sooner
// pretty good advice ngl
//////////////////////////////////////



// getting elements by class
allTitles = document.getElementsByClassName('title')

console.log(allTitles) //HTMLCollections
console.log(allTitles.length) // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]) // prints each elements in the HTMLCollection
}
console.log('type of getelementbyclass '+ typeof(allTitles))



// getting elements by id
let firstTitle = document.getElementById('first-title')
console.log(firstTitle) // <h1>First Title</h1>


// querySelector: can be used to select HTML element by its tag name, id or class. 
firstTitle = document.querySelector('h1') // select the first available h1 element
firstTitle = document.querySelector('#first-title') // select id with first-title
firstTitle = document.querySelector('.title') // select the first available element with class title

console.log('type of query selector '+ typeof(firstTitle))



// querySelectorAll: can be used to select html elements by its tag name or class. 
// It returns a nodeList which is an array like object which supports array methods. 
// We can use for loop or forEach to loop through each nodeList elements.
allTitles = document.querySelectorAll('h1') // selects all the available h1 elements in the page
console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}
allTitles.forEach(title => console.log(title))
// const allTitles = document.querySelectorAll('.title') 

console.log('type of queryselector all '+ typeof(allTitles))



const titles = document.querySelectorAll('h1')
titles[3].className = 'title'
titles[3].id = 'fourth-title'
titles[3].textContent = 'Fourth Title'

// or can do this also
// const titles = document.querySelectorAll('h1')
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')
// or
// titles[3].classList.add('title', 'header-title')





// adding styles
titles.forEach((title, i) => {
    title.style.fontSize = '24px' // all titles will have 24px font size
    if (i % 2 === 0) {
      title.style.color = 'white'
      title.style.fontSize = '20px'
      title.style.backgroundColor = 'red'
    } else {
      title.style.color = 'red'
      title.style.fontSize = '30px'
      title.style.backgroundColor = 'white'
    }
  })


//////////////////////////////////////////////////