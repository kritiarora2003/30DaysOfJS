// JSON is a light weight data format for storing and transporting
// JSON is mostly used when data is sent from a server to a client. 
// JSON is an easier-to-use alternative to XML

// PS: XML is extended markup language
// it basically lets the user to transfer info just like html pages
// but it allows us to make our own tags
// so we can send information in a more organized manner

// key of a JSON object should be with double quotes or it should be a string.

// json to obj = json.parse();
// obj to json = json.stringify();

const usersText = `{
    "users":[
      {
        "firstName":"Asabeneh",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidiya",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
}`

const usersObj = JSON.parse(usersText, (key, value) => {
    let newValue =
      typeof value == 'string' && key != 'email' ? value.toUpperCase() : value
    return newValue
  })
  console.log(usersObj)


//   When we want to change the object to JSON we use JSON.stringify(). 
//   The stringify method takes one required parameter and two optional parameters. 
// The replacer is used as filter and the space is an indentations. 
//   If we do not want to filter out any of the keys from the object we can just pass undefined.

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Redux',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'MongoDB',
        'Express',
        'React',
        'Node'
      ],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
  let txt = JSON.stringify(users, undefined, 4)
  console.log(txt)

  // this shows just plain text in the console

  const user = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    country: 'Finland',
    city: 'Helsinki',
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
    age: 250,
    isLoggedIn: false,
    points: 30
  }
  
txt = JSON.stringify(user,['firstName', 'lastName', 'country', 'city', 'age'],8)
  console.log(txt)