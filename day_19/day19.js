// basically function ke andar function
// If inner function access the variables of outer function then it is called closure.

// function outerFunction() {
//     let count = 0;
//     function innerFunction() {
//         count++
//         return count
//     }

//     return innerFunction
// }
// const innerFunc = outerFunction()
// // outer function ne inner function return kiya

// // now the innerFunc variable stores one function
// console.log(innerFunc())
// console.log(innerFunc())
// console.log(innerFunc())


// multiple return values 
function outerFunction() {
    let count = 89;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }

    // the sequence in return tells me which will be executed first
    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
// right now it is giving 90 and 89
// if i put minusOne before plusOne then it gives me 88 and 89
const innerFuncs = outerFunction()
console.log(innerFuncs)
console.log(innerFuncs.minusOne)
console.log(innerFuncs.plusOne)
