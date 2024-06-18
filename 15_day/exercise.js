////////////////////// EXERCISE LEVEL 1
// 1
class Animal {
    constructor(name, age,color, legs) {
        this.name = name,
        this.age = age,
        this.color = color,
        this.legs
        console.log(this)
    }

    bark() {
        return `${this.name} says woof woof!`
    }

    get animalColor(){
        return this.color
    }

    set setAnimalAge(age){
        this.age = age
    }
}

// 2
let dog = new Animal('buzzo', 14, 'brown', 4)
let cat = new Animal('billi', 8, 'ginger', 4)
console.log(dog.bark())
console.log(dog.animalColor)

//////////////////////// EXERCISE LEVEL 2

class Human extends Animal {
    constructor(name, age, color, legs = 2, country) {
        super(name, age, color, legs)
        this.country = country
    }
    speak() {
        return `${this.name} speaks ${this.country}'s language`
    }
}

let kriti = new Human('kriti', 21, 'brown', 3, 'india')
console.log(kriti.speak())
console.log(kriti.bark()) // i can access the methods also, noice
console.log(kriti.animalColor)


///////////////////// EXERCISE LEVEL 3
class Statistics {
    constructor(sample) {
        this.sample = sample
    }

    count(){
        return this.sample.length
    }

    sum() {
        return this.sample.reduce((acc,curr)=>acc+curr, 0)
    }

    min(){
        return Math.min(...this.sample)
    }

    max(){
        return Math.max(...this.sample)
    }

    mean(){
        return Math.ceil(this.sum()/this.count())
    }

    sort() {
        return this.sample.sort((a,b)=>a-b)
    }

    median() {
        let newarray = this.sort()
        if (this.count % 2){
            return newarray[(this.count()-1)/2]
        }
        else {
            return (newarray[(this.count()-1)/2] + newarray[(this.count()+1)/2])/2
        }
    }

    range(){
        const sortedArray = this.sort(),
              range = sortedArray[sortedArray.length-1] - sortedArray[0]
        
        return range
    }

}

let array = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistics = new Statistics(array)

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Variance: ',statistics.var()) // 17.5
// console.log('Frequency Distribution: ',statistics.freqDist()) 