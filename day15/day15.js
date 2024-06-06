// The constructor is a builtin function which allows as to create a blueprint for our object
// Inside the parenthesis we pass the properties of the object as parameter
// We use the this keyword to attach the constructor parameters with the class.


class Person {
    constructor(firstName, lastName) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
    }
}

const person1 = new Person('Asabeneh', 'Yetayeh')
const person2 = new Person('Lidiya', 'Tekle')
const person3 = new Person('Abraham', 'Yetayeh')

console.log(person1)
console.log(person2)
console.log(person3)


// The get method allow us to access value from the object
// The setter method allow us to modify the value of certain properties.
