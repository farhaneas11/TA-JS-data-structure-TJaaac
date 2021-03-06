1. Write the output with reason

```js
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

let person2 = person;

person.firstName = 'Arya';//mutation happens.

console.log(person2.firstName); // output//arya{value has been changed into arya}
console.log(person.firstName); // output//arya
console.log(person.lastName); // output//undefined
console.log(person == person2); // output//true
console.log(person === person2); // output//true
console.log(person.lastName === person2.lastName); // output//true
```

2. Write the output with reason:

```js
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person };

person.firstName = 'Arya';
person.city = 'Navada';

console.log(personTwo.firstName); // output//john{clonnig happens here.so when the  value firstname is changed it doesnt change in persontwo}
console.log(person.firstName); // output//arya
console.log(personTwo.lastName); // output//doe
console.log(person.firstName === personTwo.firstName); // output//false
console.log(person == personTwo); // output//false
console.log(person === personTwo); // output//false
console.log(person.address === personTwo.address); // output//false
console.log(person.address == personTwo.address); // output//false
console.log(personTwo.address.city); // output//san jose
console.log(person.address.city); // output//navada
console.log(person.address.city == personTwo.address.city); // output//false
```

3. Write the output with reason:

```js
let persona = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwoo = { ...person, address: { ...person.address } };

persona.firstName = 'Arya';
persona.city = 'Navada';

console.log(personTwo.firstName); // output//arya
console.log(person.firstName); // output//arya
console.log(personTwo.lastName); // output//doe
console.log(person.firstName === personTwo.firstName); // output//true
console.log(person == personTwo); // output//true
console.log(person === personTwo); // output//true
console.log(person.address === personTwo.address); // output//true
console.log(person.address == personTwo.address); // output//true
console.log(personTwo.address.city); // output//navada
console.log(person.address.city); // output//navada
console.log(person.address.city == personTwo.address.city); // output//true
```

4. Clone the `blogs` variable into a new variable named `clonedBlogs`

```js
let blogs = [
  {
    id: 1,
    title: 'Post #1',
    body: 'My first blog post',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'My second blog post',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'My third blog post',
  },
];
let clonedBlogs = {...blogs};
// Your code goes here
```

5. Clone the `question` variable into a new variable named `questionClone`

```js
var questions = [
  {
    prompt: 'Why is the sky blue?',
    responses: [
      'Because the color blue was on sale at Wallmart',
      'Because blue is the prettiest color',
      'Because the air molecules difract blue light more than any other color',
    ],
  },
  {
    prompt: 'Why are leaves usually green?',
    responses: [
      'So green caterpillars can hide better.',
      'Because leaves can more easily make energy with green light',
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];
let questionClone = {...questions};
// Your code goes here
```

6. Clone the `allBlogs` variable into a new variable named `allBlogsClone`

```js
var allBlogs = {
  id: 1,
  title: 'Alamofire JSON Serialization',
  body: 'All about serialization in Alamofire...',
  author: {
    id: 1,
    fullName: 'Jeff Potter',
    username: 'jpotts18',
  },
  comments: [
    {
      id: 1,
      body: 'Thanks for the help Jeff, this saved me hours',
    },
    {
      id: 2,
      body: 'Your welcome. I am happy to help!',
    },
  ],
};
let allBlogsClone ={...allBlogs,comments:{...allBlogs.comments}};
// Your code goes here
```

7. Clone the `person` variable into a new variable named `clonedPerson`

```js
let person = [
  {
    input: { name: 'Ryan' },
    output: { name: 'Ryan' },
  },
  {
    input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
    output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
  },
  {
    input: { name: 'Ryan', age: 24 },
    output: { name: 'Ryan', age: 24 },
  },
  {
    input: {
      name: { first: 'Ryan', last: 'Haskell-Glatz' },
      birthday: { year: 1993, month: 'Nov' },
    },
    output: {
      firstName: 'Ryan',
      lastName: 'Haskell-Glatz',
      birthdayYear: 1993,
      birthdayMonth: 'Nov',
    },
  },
];
let clonedPerson = {...person,input:{...person.input},output:{...person.output}};
// Your code goes here
```

8. Write a function named `cloneObject` that accepts an object and returns the clone of the object

```js
function cloneObject(object) {
  for ( let i=0;i<object.length;i++){
    return {...object};
  }
}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
);
console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
  }`
);
```
