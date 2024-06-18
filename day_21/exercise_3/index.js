// lets make li items dynamically
// day22 exercise 3
const challengeList = document.querySelector('ul')
let challenges = asabenehChallenges2020.challenges

for (let i = 0; i < challenges.length; i++) {
    // making a list item
    let listItem = document.createElement('li')
    if (challenges[i].status.toLowerCase() === 'done') 
        listItem.style.background = 'green'
    else if (challenges[i].status.toLowerCase() === 'ongoing')
        listItem.style.background = 'yellow'
    else
        listItem.style.background = 'red'

    // filling the list
    let listItemDiv = document.createElement('div')
    listItemDiv.classList.add('list')

    let p1 = document.createElement('p')
    p1.textContent = challenges[i].name

    let p2 = document.createElement('details')
    p2.innerHTML = `
        <summary>
            ${challenges[i].name.split(" ")[challenges[i].name.split(' ').length-1]}
        </summary>
    `
    let infoList = document.createElement('div')
    challenges[i].topics.forEach(element=>{
        let topic = document.createElement('p')
        topic.textContent = element
        infoList.appendChild(topic)
    })


    let p3 = document.createElement('p')
    p3.innerHTML = `${challenges[i].status}`

    
    challengeList.appendChild(listItem)
    listItem.appendChild(listItemDiv)
    listItemDiv.appendChild(p1)
    listItemDiv.appendChild(p2)
    listItemDiv.appendChild(p3)
    p2.appendChild(infoList)
}


// making the author section
const author_info = asabenehChallenges2020.author
let authorName = document.querySelector('.author')
let authorSocials = document.querySelector('.socials')
let authorBio = document.querySelector('.bio')
let skills = document.querySelector('.skills')
let keywords = document.querySelector('.keywords')

// setting the name 
authorName.innerHTML = `<h1> ${author_info.firstName} ${author_info.lastName} </h1>`

// setting socials
for (let i = 0; i < author_info.socialLinks.length; i++) {
    let socialMedia = document.createElement('span')
    socialMedia.innerHTML = `
     		<a href="${author_info.socialLinks[i].url}">
             ${author_info.socialLinks[i].social}
			</a>   
    `
    authorSocials.appendChild(socialMedia)
}

// setting bio
authorBio.textContent = author_info.bio

// setting skills
let authorTitles = document.createElement('div')
let authorSkills = document.createElement('div')
let authorQualifications = document.createElement('div')

authorTitles.innerHTML = `<h3> Titles </h3>`
authorSkills.innerHTML = `<h3> SKills </h3>`
authorQualifications.innerHTML = `<h3> Qualifications </h3>`

for (let i = 0; i < author_info.titles.length; i++) {
    let title = document.createElement('p')
    title.textContent = author_info.titles[i][0] + author_info.titles[i][1]
    authorTitles.appendChild(title)
}
for (let i = 0; i <  author_info.skills.length; i++) {
    let skill = document.createElement('p')
    skill.textContent = author_info.skills[i]
    authorSkills.appendChild(skill)
}
for (let i = 0; i < author_info.qualifications.length; i++) {
    let element = document.createElement('p')
    element.textContent = author_info.qualifications[i]
    authorQualifications.appendChild(element)
}

skills.appendChild(authorTitles)
skills.appendChild(authorSkills)
skills.appendChild(authorQualifications)


// setting keywords
let keyword_header = document.createElement('div')
keyword_header.classList.add('keyword_header')
keyword_header.innerHTML = `<h2>Keywords</h2>`
keywords.appendChild(keyword_header)
for (let i = 0; i < asabenehChallenges2020.keywords.length; i++) {
    let item = document.createElement('p')
    item.textContent = '#'+asabenehChallenges2020.keywords[i]
    item.style.background = getRandomHexColor()
    keywords.appendChild(item)
}



/////////// below is day 21
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


// the following is the continuation of the homework given at day 22 exercise 3
// if you wish to see the original day 21's homework please go to commit named day_21
// you will find an easy variation there
// thank you for your patience

