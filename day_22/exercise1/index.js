const evencolor = '#5FC174', 
oddcolor = '#FDDB3A',
primecolor = "#ED5A50"

// let n = prompt('How many blocks do you want?', 'Enter an integer')
// console.log(n)

let numberofblocks = 100;
let wrapper = document.querySelector('.numbers')
console.log(wrapper)

function isprime(number) {
    if (number === 1)
        return 0
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number%i === 0)
            return 0
    }
    return 1;
}

for (let i = 0; i < numberofblocks+2; i++) {
    let block = document.createElement('div')
    block.textContent = i
    if (i%2 === 0) {
        if (i === 2)
            block.style.background = primecolor
        else 
            block.style.background = evencolor
    }

    else if (isprime(i))
        block.style.background = primecolor

    else
        block.style.background = oddcolor

    wrapper.appendChild(block)
}