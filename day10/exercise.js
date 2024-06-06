function print(a) {
    console.log(a)
}


////////////////////////// EXERCISE LEVEL 1
// 1
const s = new Set();

// 2
for (i = 0; i < 10; i++) 
    s.add(i)
print(s)

// 3
s.delete(7)
print(s)

// 4
s.clear()
print(s)

// 6
// const map = new Map()
// for (country of countries) {
//     //print(country)
//     map.set(country, country.length)
// }
// print(map)


///////////////////////// EXERCISE LEVEL 2
// 1
let a = [1,2,3]
let b = [2,3]
let c = [...a, ...b]
const C = new Set(c)
print(c)
print(C)

// 2
c = a.filter(num=>b.includes(num))
print(c)



//////////////////////// EXERCISE LEVEL 3
// 1
// print(countries_data)
const languages = new Set();
for (country of countries_data) {
    for (language of country.languages){
        languages.add(language)
    }
}
print(languages)
print(languages.size)


// 2
// make a map of the countries_data file 
let map = new Map();
for (language of languages) {
    count = 0;
    for (country of countries_data) {
        if (country.languages.includes(language)) {
            count++;
        }
    }
    map.set(language, count)
}
// print(map)
// okay now we want top 10 entries from the map
let sortedMap = new Map([...map.entries()].sort((a,b)=>b[1] - a[1]))
print(sortedMap)

arrayTmp = Array.from(sortedMap).slice(0, 10)
print(arrayTmp)