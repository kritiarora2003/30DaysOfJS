print = a => console.log(a)

//////////////////////////////// EXERCISE LEVEL 1
// 1
let txt = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let pattern = /\b\d+\b/g
// without the g flag the pattern will return only the first occurance
let salary = txt.match(pattern)
print(salary)
print(salary.map(ele=>parseInt(ele)).reduce((acc,curr)=>acc+curr))

// 2
txt ='The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.'
pattern = /-?\d+/g   // minus sign may/maynot be there
points = txt.match(pattern)
print(points)
newpoints = points.map(a=>parseInt(a)).sort((a,b)=> {
    if(a>b) return 1;
    if(a<b) return -1;
    return 0
});
print(newpoints)
print(Math.abs(newpoints[0] - newpoints[newpoints.length -1]))

// 3
// regex to identify a valid js variable name
pattern = /^[A-za-z_]+[\w]*$/
let variable = 'kriti-arora'
print(pattern.test(variable))

///////////////////////// EXERCISE LEVEL 2
// 1 count the most frequent words
// i have no idea how regex is supposed to help here
// lets try tho
let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`


// without regex
// function tenMostFrequentWords(paragraph, topwhat) {
//     // remove the periods from the string
//     let a = paragraph.split('.').join("")
//     // convert the string into an array of words
//     a = a.split(" ")
//     // got an array of words
//     print(a)
//     let set = new Set();
//     a.forEach(element=>set.add(element))
//     // added everything to a set
//     let frequencyArray = []
//     for (word of set) {
//         let count = 0;
//         for (element of a){
//             if (word === element)
//                 count++;
//         }
//         frequencyArray.push({
//             word: word,
//             count: count
//         })
//     }
//     return frequencyArray.sort((a,b)=>b.count-a.count).slice(0,topwhat)
// }

// while using regex
function tenMostFrequentWords(paragraph, topwhat) {
    // remove the periods from the string
    let a = paragraph.split('.').join("")
    // convert the string into an array of words
    a = a.split(" ")
    // got an array of words
    print(a)
    let set = new Set();
    a.forEach(element=>set.add(element))
    // added everything to a set
    let frequencyArray = []
    for (word of set) {
        let pattern = new RegExp(word, 'g')
        frequencyArray.push({
            word: word,
            count: paragraph.match(pattern).length
        })
    }
    return frequencyArray.sort((a,b)=>b.count-a.count).slice(0,topwhat)
}


console.log(tenMostFrequentWords(paragraph,10)) 




/////////////////////////// EXERCISE LEVEL 3
// 1
// removing any special character from a string
sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence) {
    let newsentence = sentence.replace(/[^\w\s]/gi,"")
    return newsentence
}

console.log(cleanText(sentence))
print(tenMostFrequentWords(cleanText(sentence), 3))