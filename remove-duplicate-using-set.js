/*

1. Remove duplicates from an array of numbers/strings
Well, this is the only one not about map/reduce/filter, but it’s so compact that it was hard not to put it in the list. Plus we’ll use it in a few examples too.
*/
const values = [3, 1, 3, 5, 2, 4, 4, 4];
const uniqueValues = [...new Set(values)];

console.log(uniqueValues);

