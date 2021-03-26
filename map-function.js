//1. Remove duplicates from an array of numbers/strings
const values = [3,1,3,5,2,4,4,4]
const uniqueValues = [...new Set(values)];


/*
8. Extract the unique values for the given key of each item in the array
Let’s create a list of existing users’ groups. 
The map() method creates a new array with the results of calling a provided function on every element in the calling array.
*/
const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];

const listOfUsers= [users.map(it => it.group)]
console.log(listOfUsers);


const listOfUniqueGroupUsers= [...new Set(users.map(it => it.group))]
console.log(listOfUniqueGroupUsers);


/*
10. Create an array of Fahrenheit values from an array of Celsius values
Think of it as processing each element with a given formula ?
*/

const celsius = [-15, -5, 0, 10, 16, 20, 24, 32]
const fahrenheit = celsius.map(t => t * 1.8 + 32);
console.log(fahrenheit);

/*
11. Encode an object into a query string
*/
const params = {lat: 45, lng: 6, alt: 1000};

const queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&')
//const queryString = Object.entries(params).map(p => encodeURIComponent(p[0]) + '=' + encodeURIComponent(p[1])).join('&')
console.log(queryString);


/*
12. Print a table of users as a readable string only with specified keys
Sometimes you want to print your array of objects with selected keys as a string, 
but you realize that JSON.stringify is not that great ?
*/
const students = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];

const listStudents = students.map(({id, age, group}) => `\n${id} ${age} ${group}`).join('')
const jsonList = JSON.stringify(students, ['id', 'name', 'group'], 3);
console.log(listStudents);
console.log(jsonList);

/*

13. Find and replace a key-value pair in an array of objects
Let’s say we want to change John’s age. If you know the index, 
you can write this line: users[1].age = 29. However, 
let’s take a look at another way of doing it:


*/

const updatedUsers = students.map(
    p => p.id !== 47 ? p : {...p, age: p.age + 1}
)

console.log(updatedUsers)


/*
14. Union (A ∪ B) of arrays


*/
const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];

console.log([...new Set([...arrA, ...arrB])]); // returns [1, 4, 3, 2, 5, 6, 7])

/*
15. Intersection (A ∩ B) of arrays
The last one!
*/
console.log(arrA.filter(it => arrB.includes(it)));
