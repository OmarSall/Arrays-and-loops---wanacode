// Exercise: create an array with three fruits
const fruits = ["Apple", "Banana","Mango"];

// Exercise: print the last element in the vegetables  array to the console
const vegetables = ['Carrot', 'Tomato', 'Cabbage'];
console.log(vegetables.pop());

// Exercises:

// const vegetables = ['Carrot', 'Tomato', 'Cabbage'];
// print all elements of the vegetables  array to the console using 
// the while loop

// print all elements of the vegetables  array to the console using 
// the for loop

const vegetabless = ['Carrot', 'Tomato', 'Cabbage'];

let i = 0;
while (i < vegetabless.length) {
    console.log(vegetabless[i]);
    i++;
}

for (i = 0; i < vegetabless.length; i++) {
    console.log(vegetabless[i]);
}

// HomeWork
// 1. Use the elements from thingsInHome  array and thingsInGarden  
// array to create madeOutOfWood array and edibles  array. 
// To use specific elements from the existing array you need to use 
// index notation.
// example: thingsInHome[0]  holds the "mint" string.

const thingsInHome = ['mint', 'basil', 'cactus', 'table', 'wooden spoon', 'bread'];
const thingsInGarden = ['apple', 'trees', 'wooden stairs', 'plum', 'wooden bench'];

const madeOutOfWood = [thingsInHome[4], thingsInGarden[2], thingsInGarden[4]]; // wooden spoon, wooden stairs, wooden bench
const edibles = [thingsInHome[0], thingsInHome[1], thingsInHome[5], thingsInGarden[0], thingsInGarden[3]]; // mint, basil, bread, apple, plum

console.log(madeOutOfWood); // ['wooden spoon', 'wooden stairs', 'wooden bench']
console.log(edibles); // ['mint', 'basil', 'bread', 'apple', 'plum']

// 2. Write the getSmallestNumber function

getSmallestNumber([2, -5, 10, 1, 4]); // -5
getSmallestNumber([200, 25, 4, 123, 87]); // 4

// write two versions of the above function: one using a for 
// loop and one using the sort function

// for loop version

function getSmallestNumberForLoop(numbersArray) {
    let smallestNumber = numbersArray[0]; //assumption that the first item is the smallest one

    for (let i = 1; i < numbersArray.length; i++) {
        if (numbersArray[i] < smallestNumber) {
            smallestNumber = numbersArray[i];
        }
    }

    return smallestNumber;
}

// sort() version

function getSmallestNumberSortVersion(numbersArray) {
    return numbersArray.sort((a,b) => a - b)[0];
}

console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5\

// 3. Write the getSquaredNumbers function
// don't modify the array passed as an argument

function getSquaredNumbers(numbers) {
    return numbers.map(number => number ** 2);
}

getSquaredNumbers([1, 2, 3, 4, 5]); // [1, 4, 9, 16, 25]
getSquaredNumbers([6, 7, 8, 9, 10]); // [36, 49, 64, 81, 100]

const numbers = [1, 2, 3];
const squaredNumbers = getSquaredNumbers(numbers);
console.log(squaredNumbers); // [1, 4, 9]
console.log(numbers); // [1, 2, 3]
console.log(numbers !== squaredNumbers); // true

// 4. Write the getReversedString  function
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

function getReversedString(string) {
    return string.split("").reverse().join("");
}

getReversedString('Hello!'); // '!olleH'
getReversedString('Arrays'); // 'syarrA'

// 5. Write the isPalindrome  function. Inside the isPalindrome  function, 
// call the getReversedString  function. It should be case-insensitive and shouldn't 
// take spaces into consideration.

function getReversedString(string) {
    return string.split("").reverse().join("");
}

function isPalindrome(string) {
    // Remove spaces and convert to lowercase
    const cleanedString = string.replace(/\s/g, "").toLowerCase(); // \s matching spaces, g - apply globally
    return cleanedString === getReversedString(cleanedString);
}

isPalindrome('Kayak'); // true
isPalindrome('Racecar'); // true
isPalindrome('Was it a cat I saw') // true
isPalindrome('Hello!'); // false

// 6. Write the countLetters function. It should return an object representing the 
// number of letters in the given text. Ignore spaces and make sure your function 
// is case-insensitive.

// const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');

// console.log(lettersObject);
// {
//   a: 1,
//   b: 1,
//   c: 1,
//   d: 1,
//   e: 3,
//   f: 1,
//   g: 1,
//   h: 2,
//   i: 1,
//   j: 1,
//   k: 1,
//   l: 1,
//   m: 1,
//   n: 1,
//   o: 4,
//   p: 1,
//   q: 1,
//   r: 2,
//   s: 1,
//   t: 2,
//   u: 2,
//   v: 1,
//   w: 1,
//   x: 1,
//   y: 1,
//   z: 1,
// }


// const lettersObject = countLetters('Hello');

// console.log(lettersObject);

// { 
//   h: 1,
//   e: 1,
//   l: 2,
//   o: 1
// }

function countLetters(text) {
    const letterCount = {};
    const cleanedText = text.replace(/\s/g, "").toLowerCase();

    for (let character of cleanedText) {
        letterCount[character] = (letterCount[character] || 0) + 1; // seeting up initial value
    }

    return letterCount;
}
    
const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');
console.log(lettersObject);

// 7. Write the getAgeDifference function that finds the difference between 
// the youngest and oldest person. Inside of the getAgeDifference function 
// call the getYoungestPerson  and getOldestPerson functions that you write yourself.


function getYoungestPerson(people) {
    return people.reduce((youngest, person) => person.age < youngest.age ? person : youngest);
}

function getOldestPerson(people) {
    return people.reduce((oldest, person) => person.age > oldest.age ? person : oldest);
}

function getAgeDifference(people) {
  const youngest = getYoungestPerson(people);
  const oldest = getOldestPerson(people);
  return oldest.age - youngest.age;
}

const peopleArray = [
    {
      name: 'Adam',
      age: 20
    },
    {
      name: 'Amanda',
      age: 5
    },
    {
      name: 'John',
      age: 75
    },
    {
      name: 'Dave',
      age: 15
    }
  ]
  

getAgeDifference(peopleArray); // 70

// 8. https://www.codewars.com/kata/5715eaedb436cf5606000381

// Task
// You get an array of numbers, return the sum of all of the positives ones.

// Example
// [1, -4, 7, 12] => 1 + 7 + 12 = 20
// 1+7+12=20
// Note
// If there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return arr.reduce((sum, currentNumber) => {
        if (currentNumber > 0) {
            return sum + currentNumber;
        }
        return sum;
    }, 0);
}

console.log(positiveSum([1, -4, 7, 12])); // 20

// 9. https://www.codewars.com/kata/515e271a311df0350d00000f
// Complete the square sum function so that it squares each number
//  passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 
// 1^2+2^2+2^2=9

function squareSum(numbers) {
    return numbers.reduce((sumSquare, currentNumber) => {
        return sumSquare + currentNumber**2;
    }, 0);
}

console.log(squareSum([1, 2, 2])); // 9

// 10. https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
// Write a function to convert a name into initials. This kata 
// strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

function abbrevName(name) {
    const names = name.split(" ");
    const firstInitial = names[0][0].toUpperCase();
    const secondInitial = names[1][0].toUpperCase();
    return `${firstInitial}.${secondInitial}`;
}

console.log(abbrevName("Sam Harris")); // S.H
console.log(abbrevName("patrick feeney")); // P.F

// 11. https://www.codewars.com/kata/54edbc7200b811e956000556
// Consider an array/list of sheep where some sheep may be missing from 
// their place. We need a function that counts the number of sheep present
//  in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.
// Hint: Don't forget to check for bad values like null/undefined

function countSheep(sheepArray) {
    return sheepArray.filter(sheep => sheep === true).length;
}

const sheepArray = [
    true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true
];

console.log(countSheep(sheepArray)); // 17

// 12. Given a random non-negative number, you have to 
// return the digits of this number within an array in reverse order.

// Example (Input => Output):
// 35231 => [1,3,2,5,3]
// 0     => [0]

function digitize(number) {
    return String(number).split("").map(Number).reverse();
}

console.log(digitize(35231)); // [1, 3, 2, 5, 3]
console.log(digitize(0));     // [0]

// 13. Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but 
// containing one "needle".
// After your function finds the needle it should return a message 
// (as a string) that says:
// "found the needle at position " plus the index it found the needle, so:
// Example(Input --> Output)
// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> 
// "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6"

function findNeedle(haystack) {
    const index = haystack.indexOf("needle");
    return index !== -1 ? `found the needle at position ${index}`: "needle not found";
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])); 
//  "found the needle at position 5"

// 14. Given an array of integers, return a new array with each value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]

function doubleArrayValues(numbersArray) {
    return numbersArray.map(number => number * 2);
}

console.log(doubleArrayValues([1, 2, 3])); // Output: [2, 4, 6]

// 15. Given a set of numbers, return the additive inverse of each. 
// Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []
// You can assume that all values are integers. Do not mutate the input array.

function invertNumbers(numbersArray) {
    return numbersArray.map(number => -number);
}

console.log(invertNumbers([1, 2, 3, 4, 5])); // Output: [-1, -2, -3, -4, -5]

// 16. Write a function that takes an array of numbers and returns 
// the sum of the numbers. The numbers can be negative or non-integer.
//  If the array does not contain any numbers then you should return 0.

function sumNumbers(numbersArray) {
    return numbersArray.reduce((sum, currentNumber) => sum + currentNumber, 0);
}

console.log(sumNumbers([1.5, 2.3, -3.7, 4.2])); // Output: 4.3

// 17. I'm new to coding and now I want to get the sum of two arrays... 
// Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

function arraysSum(arr1, arr2) {
    const sum1 = arr1.reduce((sum, currentNumber) => sum + currentNumber, 0);
    const sum2 = arr2.reduce((sum, currentNumber) => sum + currentNumber, 0);
    return sum1 + sum2;
}

console.log(arraySum([1, 2, 3], [4, 5, 6])); // Output: 21

// create the getArraySum function that sums the elements of a 
// single array and use it in the arrayPlusArray function

function getArraySum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function arrayPlusArray(arr1, arr2) {
    return getArraySum(arr1) + getArraySum(arr2);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // Output: 21

// 18. Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". 
// Input will always be valid, i.e. no negative integers.

function countSheep(number) {
    return [...Array(number)].map((_, i) => `${i+1} sheep...`).join("");
}

console.log(countSheep(3)); // "1 sheep...2 sheep...3 sheep..."

// 19. It's the academic year's end, fateful moment of your school report.
//  The averages must be calculated. All the students come to you and entreat
//  you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.
// The array will never be empty.

function getAverage(marks) {
    const sum = marks.reduce((sum, number) => sum + number, 0);
    return Math.floor(sum / marks.length);
}

console.log(getAverage([1, 2, 3, 4, 5]));  // 3

// 20. You take your son to the forest to see the monkeys. 
// You know that there are a certain number there (n), but your son 
// is too young to just appreciate the full number, he has to start 
// counting them from 1.

// As a good parent, you will sit and count with him. 
// Given the number (n), populate an array with all numbers up to and 
// including that number, but excluding zero.

// For example(Input --> Output):

// 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//  1 --> [1]

function monkeyCount(number) {
      return Array.from({ length: number }, (_, i) => i + 1);
    }

console.log(monkeyCount(10));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]