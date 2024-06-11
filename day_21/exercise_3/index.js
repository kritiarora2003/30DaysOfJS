// caputuring all the elements 
const year = document.querySelector('span')
const dateTimeElement = document.querySelector('.dateTime')
const completedItems = document.querySelectorAll('#done')
const ongoingItems = document.querySelectorAll('#ongoing')
const upcomingItems = document.querySelectorAll('#upcoming')


// making the year jumbo
year.style.fontSize = '80px'


// coloring the list items according to completion status
completedItems.forEach(ele=>{
    ele.style.background = 'green'
})
ongoingItems.forEach(ele=>{
    ele.style.background = 'yellow'
})
upcomingItems.forEach(ele=>{
    ele.style.background = 'red'
})
console.log(upcomingItems)



function getdate() {
    const dateobj = new Date()
    const month = dateobj.toLocaleString('default', { month: 'long' })
    const day = dateobj.getDate()
    const year = dateobj.getFullYear()
    const hours = dateobj.getHours()
    const mins = dateobj.getMinutes()
    const secs = dateobj.getSeconds()
    return `${month} ${day}, ${year} ${hours}:${mins}:${secs}`
}

function getRandomHexColor() {
    const hexChars = '1234567890ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        const randomhex = Math.floor(Math.random()*hexChars.length)
        color += hexChars[randomhex]
    }
    return color;
}

// syntax : setInterval(function, time)
setInterval(()=>{
    year.style.color = getRandomHexColor()
    dateTimeElement.textContent = getdate()
    dateTimeElement.style.background = getRandomHexColor()
}, 1000)



// notes : bhai band hi baj isko banane me
// haye
// kaun kehta hai front end easy hai
// and today was just day 1 of dom
