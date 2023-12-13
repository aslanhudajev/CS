//////////////////////////////////////////////////////////////////////////
//https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion//
//Recursion in Javascript Questions///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

//Returns the amount of steps needed to converge 1, from n, according to the collatz conjecture.
function collatz(n, steps = 0) {
  //base case
  if (n === 1) {
    return steps;
  } else if (n % 2 === 0) {
    return collatz(n / 2, steps + 1);
  } else {
    return collatz(3 * n + 1, steps + 1);
  }
}
  
//Returns the n:th fibonacci number.
function fibonacci(n, a = 0, b = 1, fib = 1) {
  //base case
  if (n === 2) {
        return fib;
    } else if (n > 0) {
        return fibonacci(n - 1, (a = b), (b = fib), (fib = a + b));
    }
}
  
//Returns the sum of all numbers from 1 to n.
function sumRange(n) {
  if (n === 1) return 1;
  else return n + sumRange(n - 1);
}
  
//Returns the b to the power of e.
function power(b, e) {
  if (e === 0) return 1;
  else return b * power(b, e - 1);
}
  
//Returns the factorial product on number n (n!).
function factorial(n) {
  if (n === 1) return 1;
  else return n * factorial(n - 1);
}
  
//Returns true of the given call back returns true for all elements in arr,
function allTrue(arr, fn) {
  if (arr.length === 0) return true;
  if (fn(arr[0])) {
    return allTrue(arr.slice(1), fn);
  } else return false;
}
  
//Returns the product of all numbers in arr.
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  } else {
    return arr[0] * productOfArray(arr.slice(1));
  }
}
  
//Returns true if val exists in obj, otherwise this function returns false.
//This function uses revursive traversal to search through an object.
//If a property of obj is not an object, it compares it to val.
//If a property of obj is another object, it recursively calls itself and restarts the samt proccess for the sub-object.
function contains(obj, val) {
  for (let prop in obj) {
    if (obj[prop] === val) return true;
    else if (typeof obj[prop] === "object") return contains(obj[prop], val);
  }

  return false;
}
  
//Returns the number of numbers in an array (one or multi-dimensional).
//This function uses recursive traversal to achieve this.
function numOfInts(arr) {
  let total = 0;

  if (arr.length === 0) return 0;

  arr.forEach((el) => {
    if (Number.isInteger(el)) total += 1;
    else if (Array.isArray(el)) return (total += numOfInts(el));
  });

  return total;
}
  
  //Returns the square sum of all numbers in an array (one or multi-dimensional).
  //This function uses recursive traversal to achieve this.
  function sumOfSquares(arr) {
    if (arr.length === 0) return 0;
  
    let total = 0;
  
    arr.forEach((el) => {
      if (Number.isInteger(el)) total += el * el;
      else if (Array.isArray(el)) return (total += sumOfSquares(el));
    });
  
    //Base case
    return total;
  }
  
//Returns array of size n with all elements equal to num.
function replicate(n, num) {
  if (n === 1) return [num];
  else {
    return [num].concat(replicate(n - 1, num));
  }
}
  
export {
  collatz,
  fibonacci,
  sumRange,
  power,
  factorial,
  allTrue,
  productOfArray,
  contains,
  numOfInts,
  sumOfSquares,
  replicate,
};