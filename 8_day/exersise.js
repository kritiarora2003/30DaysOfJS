function print(a){
    console.log(a)
}
// exercise level 1
// 1
const dog = {};
//2
console.log(dog);
//3
dog.name = 'buzzo';
dog.legs = 4;
dog.color = 'red'
dog.age = 13;
dog.bark = 'woof woof';
//4 
print(dog);
//5
dog.breed = 'pug';
dog.getDogInfo = function() {
    print(Object.values(this));
}


// exercise level 2;
const users = {
    Alex: {
      email: "alex@alex.com",
      skills: ["HTML", "CSS", "JavaScript"],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: "asab@asab.com",
      skills: ["HTML", "CSS", "JavaScript", "Redux", "MongoDB", "Express", "React", "Node"],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: "daniel@daniel.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: "daniel@alex.com",
      skills: ["HTML", "CSS", "JavaScript", "Python"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: "john@john.com",
      skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: "thomas@thomas.com",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: "paul@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
//1
  let max = 0
  let count = 0
  let item;
  for(i in users){
    count = users[i].skills.length
    //print(typeof(i))
    if(count > max){
        max = count
        item = i
    }
  }
  print("person with max skills")
  print(item);
  count = 0

//2
let count2 = 0
for(i in users){
    if(users[i].isLoggedIn)
    count++

    if(users[i].points >= 50)
    count2++
}
print(count)
print(count2)
count = 0

// 3
for(i in users){
    if(users[i].skills.includes("MongoDB") && users[i].skills.includes("Express") && users[i].skills.includes("React") && users[i].skills.includes("Node"))
    print(i);
}

// 4 
users.kriti = {
    email: "kriti@paul.com",
      skills: ["HTML", "CSS", "JavaScript", "MongoDB", "Express", "React", "Node"],
      age: 20,
      isLoggedIn: false,
      points: 4000
}
print(users)

//5 
print(Object.keys(users))

// 6
for(i in users){
    print(Object.values(users[i]))
}

// exercise level 3;
//1 
const personAccount = {
    firstName:'kriti',
    lastName:'arora',
    accountInfo: '1234',
    incomes: {
        primary: 100,
        secondary: 200
    },
    expenses: {
        food: 20,
        clothes: 50
    },
    totalIncome: function (){
        let sum = 0

        for(i in personAccount.incomes)
        sum += i

        return sum
    },
    totalExpense: function (){
        let sum = 0
        let values = Object.values(this.expenses)
        for(i in values)
        sum += i

        return sum
    }
    // totalExpenses: function () {
    //     let tExpenses = 0;
    //     let values = Object.values(this.expenses);
    //     for (let i = 0; i < values.length; i++) {
    //         tExpenses += values[i]
    //     }
    //     return tExpenses
    // },
}
print(personAccount.totalExpenses)

