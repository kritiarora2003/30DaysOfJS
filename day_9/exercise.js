// // yaar mai na console.log likh likh ke thak gyi hu
function print(a){
    console.log(a)
}


// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ]


// /////////////////// EXERCISE LEVEL 1
// // 1
// // forEach just modifies the original array
// numbers.forEach((ele)=>console.log(ele));
// // map makes a new array
// const numbers2 = numbers.map((ele)=>ele+1)
// console.log(numbers2)
// print(numbers)
// // filter returns an array with elements satisfying some condition
// const filteredarray = numbers.filter(ele=>ele>5)
// print(filteredarray)
// print(numbers)
// // reduce has an accumulator which collects the sum or product
// // returns the accumulator
// const sum = numbers.reduce((acc, curr)=>acc*curr,1)
// // 1 is the initial value
// print(sum)



// 2
// function callback(ele) {
//     print(ele)
// }
// consolelog = (ele) => print(ele)
// numbers.forEach(consolelog)


// // 6
// const mapped = countries.map((country)=>country.toUpperCase())
// print(mapped)

// 11
// const filtered = countries.filter((country)=>country.includes('land'))
// 12
// const filtered = countries.filter((country)=>country.length === 6)
// 14
// const filtered = countries.filter((country)=>country[0] === "E")
// print(filtered)

// 15
// const filtered = products.filter((product)=>typeof(product.price)==='number')
// print(filtered)

// // 16
// const arr = [1, "kriti", 3]
// const getStringLists = (arr) => {
//     const filtered = arr.filter((ele)=>typeof(ele) === 'string')
//     return filtered;
// }
// print(getStringLists(arr))

// // 17
// let sum;
// sum = numbers.reduce((acc, curr)=>acc+curr, 0)
// print(sum)

// // 18
// let concatcountries = countries.reduce((acc, curr) => 
//     acc+curr, ''
// )
// print(concatcountries)

// // 24
// let IsNorwayThere = countries.findIndex(country => {
//     return country.includes('Norway')
// }
// )
// print(IsNorwayThere)

// let indexOfNorway = countries.findIndex(country => country === "Norway")
// countrie = countries.filter(country=>country!="Norway")
// print(countries)
// print(countrie)



// //////////////// EXERCISE LEVEL 2
// // 1
// let sum = products.map((product)=>product.price).filter((price)=>typeof(price)==='number').reduce((acc, curr)=>acc+curr, 0)
// print(sum);

// //2 
// const totalPriceOfProductsUsingReduce = products.reduce((acc, product) => {
//     const price = Number(product.price) || 0;

//     return acc + price
// }, 0)
// console.log(totalPriceOfProductsUsingReduce);


// // 3
// function categorizeCountries(countries) {
//     const categories = {
//       'land': [],
//       'ia': [],
//       'island': [],
//       'stan': [],
//       'other': []
//     };
  
//     // Helper function to check if a country matches a pattern
//     function matchesPattern(country, pattern) {
//       return pattern(country.toLowerCase());
//     }
  
//     // Higher order function to categorize a country based on a pattern
//     function categorizeCountry(country, pattern, category) {
//       if (matchesPattern(country, pattern)) {
//         categories[category].push(country);
//         return true;
//       }
//       return false;
//     }
  
//     // Categorize each country based on the patterns
//     countries.forEach(country => {
//         let added = 
//       categorizeCountry(country, name => name.endsWith('land'), 'land') ||
//       categorizeCountry(country, name => name.endsWith('ia'), 'ia')||
//       categorizeCountry(country, name => name.includes('island'), 'island')||
//       categorizeCountry(country, name => name.endsWith('stan'), 'stan')

//       if (added === false)
//         categories['other'].push(country)
//     });
  
//     // Return the array of categorized countries
//     return categories;
// }
// const arr = categorizeCountries(countries)
// print(arr);


// 4


// 5 
function getFirstTencountries() {
    arr = countries.filter(country => countries.indexOf(country) <= 10)
    return arr;
}
arr = getFirstTencountries(countries);
print(arr);


// 6
function getFirstTencountries() {
    arr = countries.filter(country => countries.indexOf(country) >= countries.length - 10)
    return arr;
}
arr = getFirstTencountries(countries);
print(arr);

// 7
// find the letter which is used the maximum times as the start letter of the countries
// categories = [];
// categories.push({a: [1]})
// print(categories)
