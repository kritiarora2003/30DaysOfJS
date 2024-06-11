console.log('check')
// works

////////////////////////////////// EXERCISE LEVEL 1
let firstpara = (document.querySelector('p'))

let secondpara = document.querySelector('#second')
console.log(secondpara)

let allpara = document.querySelectorAll('p')
console.log(allpara)

allpara.forEach(para=>{
    console.log(para.innerHTML)
})

allpara[3].innerHTML = 'Fourth paragraph'

allpara[3].className = 'para'
allpara[3].id = 'fourth'

allpara.forEach(para=>{
    para.style.backgroundColor = 'orange'
    para.style.color = 'purple.s'
    para.style.fontSize = '50px'
    para.style.border = '10px solid black'
    para.style.fontFamily = 'monospace'
})