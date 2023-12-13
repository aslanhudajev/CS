import {
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
} from "./misc-assignments"
import fibs from "./fibonacci";
import fibsRec from "./fibonacci-recursive";
import mergeSort from "./merge-sort";

//Main recursive assignments tests
describe("Main recursive assignments tests:", () => {
  test("Iterative Fibonacci sequence: fibs(10) (expected result: 55)", () => {
    expect(fibs(10)).toStrictEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n]);
  });
  test("Iterative Fibonacci sequence: fibs(50) (expected result: 12,586,269,025)", () => {
    expect(fibs(50)).toStrictEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n, 89n, 144n, 233n, 377n, 610n, 987n, 1597n, 2584n, 4181n, 6765n, 10946n, 17711n, 28657n, 46368n, 75025n, 121393n, 196418n, 317811n, 514229n, 832040n, 1346269n, 2178309n, 3524578n, 5702887n, 9227465n, 14930352n, 24157817n, 39088169n, 63245986n, 102334155n, 165580141n, 267914296n, 433494437n, 701408733n, 1134903170n, 1836311903n, 2971215073n, 4807526976n, 7778742049n, 12586269025n]);
  });

  test("Recursive Fibonacci sequence: fibsRec(10) (expected result: 55)", () => {
    expect(fibsRec(10)).toStrictEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n]);
  });
  test("Recursive Fibonacci sequence: fibsRec(50) (expected result: 12,586,269,025)", () => {
    expect(fibsRec(50)).toStrictEqual([0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n, 89n, 144n, 233n, 377n, 610n, 987n, 1597n, 2584n, 4181n, 6765n, 10946n, 17711n, 28657n, 46368n, 75025n, 121393n, 196418n, 317811n, 514229n, 832040n, 1346269n, 2178309n, 3524578n, 5702887n, 9227465n, 14930352n, 24157817n, 39088169n, 63245986n, 102334155n, 165580141n, 267914296n, 433494437n, 701408733n, 1134903170n, 1836311903n, 2971215073n, 4807526976n, 7778742049n, 12586269025n]);
  });

  test("mergeSort([9 ,8 ,7 ,6, 5, 4, 3, 2, 1]) (expected result: [1, 2, 3, 4, 5, 6, 7, 8, 9])", () => {
    expect(mergeSort([9 ,8 ,7 ,6, 5, 4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
  test("mergeSort([119, 564, 99, 66, 33, 89, 1, 42, 101, 101, 101, 101]) (expected result: [1, 33, 42, 66, 89, 99, 101, 101, 101, 101, 119, 564])", () => {
    expect(mergeSort([119, 564, 99, 66, 33, 89, 1, 42, 101, 101, 101, 101])).toStrictEqual([1, 33, 42, 66, 89, 99, 101, 101, 101, 101, 119, 564]);
  });
  test("mergeSort([1548, 10567, 666, 10, 101, 567, 1, 1, 2, 2, 2, 876, 999, 5, 1, 2, 19, 18, 6563, 768, 14, 22]) (expected result: [1, 1, 1, 2, 2, 2, 2, 5, 10, 14, 18, 19, 22, 101, 567, 666, 768, 876, 999, 1548, 6563, 10567])", () => {
    expect(mergeSort([1548, 10567, 666, 10, 101, 567, 1, 1, 2, 2, 2, 876, 999, 5, 1, 2, 19, 18, 6563, 768, 14, 22])).toStrictEqual([1, 1, 1, 2, 2, 2, 2, 5, 10, 14, 18, 19, 22, 101, 567, 666, 768, 876, 999, 1548, 6563, 10567]);
  });
});

//Misc. recursive assignments tests
describe("Misc. recursive assignments tests:", () => {
  //Test objects and arrays
  var nestedObj = {
  data: {
    info: {
      stuff: {
        thing: {
          moreStuff: {
            magicNumber: 44,
            something: "foo",
          },
        },
      },
    },
  },
};

var arr1 = [[1, 2], 3];
var arr2 = [[[5], 3], 0, 2, ["foo"], [], [4, [5, 6]]];

  test("collatz(5149) (expected result: 147)", () => {
    expect(collatz(5149)).toBe(147);
  });

  test("old fibonacci(10) (expected result: 55)", () => {
    expect(fibonacci(10)).toBe(55);
  });
  test("old fibonacci(50) (expected result: 12,586,269,025)", () => {
    expect(fibonacci(50)).toBe(12586269025);
  });
  
  test("sumRange(50) (expected result: 1275)", () => {
    expect(sumRange(50)).toBe(1275);
  });
  test("sumRange(100) (expected result: 5050)", () => {
    expect(sumRange(100)).toBe(5050);
  });

  test("power(2, 3) (expected result: 8)", () => {
    expect(power(2, 3)).toBe(8);
  });
  test("power(154, 4) (expected result: 562448656)", () => {
    expect(power(154, 4)).toBe(562448656);
  });

  test("factorial(8) (expected result: 40320)", () => {
    expect(factorial(8)).toBe(40320);
  });
  test("factorial(10) (expected result: 3628800)", () => {
    expect(factorial(10)).toBe(3628800);
  });

  test("allTrue([1, 2, 3, 4, 5], (el) => el < 10) (expected result: true)", () => {
    expect(allTrue([1, 2, 3, 4, 5], (el) => el < 10)).toBe(true);
  });
  test("allTrue([1, 2, 3, 4, 5], (el) => el > 10) (expected result: false)", () => {
    expect(allTrue([1, 2, 3, 4, 5], (el) => el > 10)).toBe(false);
  });

  test("productOfArray([1, 2, 3, 4, 5]) (expected result: 120)", () => {
    expect(productOfArray([1, 2, 3, 4, 5])).toBe(120);
  });
  test("productOfArray([1, 8, 9, 20, 10]) (expected result: 14400)", () => {
    expect(productOfArray([1, 8, 9, 20, 10])).toBe(14400);
  });

  test("productOfArray([1, 2, 3, 4, 5]) (expected result: 120)", () => {
    expect(productOfArray([1, 2, 3, 4, 5])).toBe(120);
  });
  test("productOfArray([1, 8, 9, 20, 10]) (expected result: 14400)", () => {
    expect(productOfArray([1, 8, 9, 20, 10])).toBe(14400);
  });

  test("contains(nestedObj, 44) (expected result: true)", () => {
    expect(contains(nestedObj, 44)).toBe(true);
  });
  test(`contains(nestedObj, "foo") (expected result: true)`, () => {
    expect(contains(nestedObj, "foo")).toBe(true);
  });
  test("contains(nestedObj, 12) (expected result: false)", () => {
    expect(contains(nestedObj, 12)).toBe(false);
  });

  test(`numOfInts(arr1) (expected result: 3)`, () => {
    expect(numOfInts(arr1)).toBe(3);
  });
  test(`numOfInts(arr2) (expected result: 7)`, () => {
    expect(numOfInts(arr2)).toBe(7);
  });

  test(`sumOfSquares(arr1) (expected result: 14)`, () => {
    expect(sumOfSquares(arr1)).toBe(14);
  });
  test(`sumOfSquares(arr2) (expected result: 115)`, () => {
    expect(sumOfSquares(arr2)).toBe(115);
  });

  test(`replicate(5, 5) (expected result: [5, 5, 5, 5, 5])`, () => {
    expect(replicate(5, 5)).toStrictEqual([5, 5, 5, 5, 5]);
  });
  test(`replicate(2, 2) (expected result: [2, 2])`, () => {
    expect(replicate(2, 2)).toStrictEqual([2, 2]);
  });
});