// Creating an element
let title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24px'
title.textContent = 'Creating HTML element DOM Day 2'
document.body.appendChild(title)

console.log(title)


// Creating multiple elements
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    console.log(title)
}


// To see a created element on the HTML document we should append it to the parent as a child element. 
// We can access the HTML document body using document.body. 
// The document.body support the appendChild() method.
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    document.body.appendChild(title)
}

