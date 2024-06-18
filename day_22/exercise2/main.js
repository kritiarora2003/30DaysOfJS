let header = document.querySelector('header')
let wrapper = document.querySelector('.wrapper')

// Adding number of countries element
let countryNumberElement = document.createElement('h2')
let numberOfCountries = countries.length
countryNumberElement.textContent = `Total Number of Countries is ${numberOfCountries}`
header.appendChild(countryNumberElement)

// Making all the country blocks
for (let i = 0; i < numberOfCountries; i++) {
    let block = document.createElement('div')
    block.textContent = countries[i]
    block.style.border = 'solid black'
    block.style.color = 'black'
    block.style.fontSize = '15px'
    wrapper.appendChild(block)
}