////////////////////////// EXERCISE LEVEL 1
// 1
// countries api not working

///////////////////////// EXERCISE LEVEL 2  
// 2
const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

let catnames = [];
let cats = fetch(catsAPI)
// cats
//     .then(response => response.json()) // accessing the API data as JSON
//     .then(data => {
//     // getting the data
//     data.forEach(element => {
//         catnames.push(element.name)
//     });
//     console.log(data)
//     console.log(catnames)
//     })
//     .catch(error => console.error(error))
// above code is correct also


/////////////////////////// EXERCISE LEVEL 3


cats
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
    // getting the data
    let vazan = [];
    data.forEach(element => {
        let weight = element.weight.metric.split(' ').forEach(ele=>{
            let num = Number(ele)
            if (!num) return
            if (vazan.includes(num))return
            vazan.push(num)
        })
        console.log(weight)
    });
    let ans = vazan.reduce((acc,curr)=>acc+curr,0)/vazan.length
    console.log(ans)
    })
    .catch(error => console.error(error))
// 6.11 aya


// DUNNNNNNNNNNNNNNNN
