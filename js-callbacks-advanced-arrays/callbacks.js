// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ["Pencil", "Notebook", "yo-yo", "Gum"];

/* 
  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }
  // Potential Solution:
  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }
  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });
*/

function getLength(arr, cb) {
  const length = arr.length; // Get the length of the array

  cb(length); // Call the callback function with the length as an argument
}

// getLength passes the length of the array into the callback.
function callback(length) {
  console.log(length);
}
getLength(items, callback);

function last(arr, cb) {
  const lastItem = arr[arr.length - 1];
  cb(lastItem);

  // last passes the last item of the array into the callback.
}
function callback(item) {
  console.log(item);
}
last(items, callback);

function sumNums(x, y, cb) {
  const nums = x + y;
  cb(nums);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
function callback(nums) {
  console.log(nums);
}
sumNums(5, 12, callback);

function multiplyNums(x, y, cb) {
  const multiply = x * y;
  cb(multiply);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
function callback(multiply) {
  console.log(multiply);
}
multiplyNums(12, 8, callback);
function contains(item, list, cb) {
  const include = list.includes(item);
  cb(include);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
function callback(include) {
  console.log(include);
}
contains("Gum", items, callback);
/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  const uniqueArray = Array.from(new Set(array)); // Use Set to remove duplicates and convert it back to an array
  cb(uniqueArray); // Pass the unique array to the callback function

  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
function callback(uniqueArray) {
  console.log(uniqueArray);
}
removeDuplicates(items, callback);
