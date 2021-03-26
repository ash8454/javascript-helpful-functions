/*
2. A simple search (case-sensitive)
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/

const users = [
    { id: 11, name: 'Adam', age: 23, group: 'editor' },
    { id: 47, name: 'John', age: 28, group: 'admin' },
    { id: 85, name: 'William', age: 34, group: 'editor' },
    { id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];

  //filter from array
  let res1 = users.filter(it => it.name.includes("oli"));

  console.log(res1);
  //i equals ignorecase
  let res2 = users.filter(it => new RegExp('oli', "i").test(it.name))
  console.log(res2)


  //check if some users have permission
  /*
4. Check if any of the users have admin rights
    The some() method tests whether at least one element in the array passes the test implemented by the provided function.
*/

const hasAdmin = users.some(user => user.group === 'admin');
console.log(hasAdmin);

/*
15. Intersection (A ∩ B) of arrays
The last one!
*/

const arrA = [1, 4, 3, 2];
const arrB = [5, 2, 6, 7, 1];

console.log(arrA.filter(it => arrB.includes(it)));