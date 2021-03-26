//Source: https://www.digitalocean.com/community/tutorials/js-finally-understand-reduce

//The signature for the reduce array method in JavaScript is:

//arr.reduce(callback, initialValue);
/*

Reduce comes with some terminology such as reducer & accumulator. 
The accumulator is the value that we end with and the reducer is what action we will perform in
 order to get to one value.

You must remember that a reducer will only return one value and one value only hence the name reduce.

Take the following classic example:

const value = 0;

const numbers = [5, 10, 15];

for(let i = 0; i < numbers.length; i++) {
  value += numbers[i];
}

//adding each number from array
The above will give us 30 (5 + 10 + 15). This works just fine, 
but we can do this with reduce instead which will save us from mutating our value variable.

*/

/* ADDING NUMBERS OF AN ARRAY USING REDUCE METHOD */

//initial value
const initialValue = 0

//numbers array
const numbers = [5, 10, 15];

/* reducer method that takes in the accumlator and next item */
const reducer = (accumulator, item) => {
    return accumulator + item
}


/* we give the reduce method our reducer function and our initial value */
const total = numbers.reduce(reducer, initialValue);
console.log(total)

/* FLATTENING AN ARRAY USING REDUCE METHOD */

const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];
/*
And let’s say for some crazy reason, JavaScript has removed the .flat method so we have to
 flatten this array ourselves.
So we’ll write a function to flatten any array no matter how deeply nested the arrays are:
*/

/*
    check if it is value or an array 
    if array, recursive call the function to flatten
    else concat value
*/
function flattenArray(data){
    const initialArr = []
    //call reduce on our data
    //has total as accumulator and value as next item
    // console.log("Initial Array: ", initialArr);

    return data.reduce ((acc, item) => {
        return acc.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, initialArr);
}

console.log(flattenArray(numArray))

/*
Final Example - Changing an Object Structure
So with the new Pokemon game coming out, let’s pretend we have a server that sends us an array of Pokemon objects like so:

const pokemon = [
  { name: "charmander", type: "fire" },
  { name: "squirtle", type: "water" },
  { name: "bulbasaur", type: "grass" }
]
 
We want to change this object to look like:

const pokemonModified = {
  charmander: { type: "fire" },
  squirtle: { type: "water" },
  bulbasaur: { type: "grass" }
};

*/

const pokemon = [
    { name: "charmander", type: "fire" },
    { name: "squirtle", type: "water" },
    { name: "bulbasaur", type: "grass" }
  ];
// const getMapFromArray = (data) => 
//   data.reduce((accum, item) => {
//       accum[item.name] = { type: item.type};
//       return accum;
//   }, {})

  function getMapFromArray1(data){
    return data.reduce((acc, item) => {
        acc[item.name] = { type: item.type};
        return acc;
    }, {});
  }


console.log(getMapFromArray1(pokemon));

/*

flattening an array of arrays
The result of the first iteration is equal to : […[], …[1, 2, 3]] means it transforms to [1, 2, 3] — this value we provide as an ‘acc’ on the second iteration and so on.

*/

const nested = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let flat = nested.reduce((acc, it) => [...acc, ...it], []);
console.log(flat);

/*
6. Create an object that contains the frequency of the specified key
Let’s group and count the ‘age’ property for each item in the array:

*/

const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];

const groupByAge = users.reduce((accum, item) => {
    accum[item.age] = accum[item.age] + 1 || 1
    return accum;
  }, {})

  console.log(groupByAge);

/*
7. Indexing an array of objects (lookup table)
Instead of processing the whole array for finding a user by id, 
we can construct an object where the user’s id represents a key (with constant searching time).
*/

const groupById1 = users.reduce((accum, item ) => {
    accum[item.id] = { id: item.id, name: item.name, age: item.age, group: item.group};
    return accum;
}, {})
console.log(groupById1)
const groupById2 = users.reduce((accum, item) => (accum[item.id] = item, accum), {})
console.log(groupById2);



