// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.

function max(x, y){
  if (x>y){
    return x +' is greater.';
  } else {
    return y +' is greater.';
  }
}

console.log(max(1,4));


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(x, y, z){
    if (x>y && x>z){
      return x +' is the greatest.';
    } else if (y>z){
      return y +' is the greatest.';
    } else {
      return z +' is the greatest.';
    }
}
console.log(maxOfThree(4, 5, 21));

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(letter){
    if (letter === "a" ||letter === "e" ||letter === "i" ||letter === "o" ||letter === "u") {
      return true;
    }
    else if  (letter !== "a" || "e" || "i" || "o" || "u") {
      return false;
  }
}
console.log(isVowel("p"));


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.

  function sum(x, y) {
    return x + y;
  }
console.log(sum(3, 5));

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.

function avg(x, y, z) {
  return (x + y + z)/3;
}

console.log(avg(3, 4, 10));

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.

function getLength(string) {
  return string.length;
}
console.log("There are " + getLength('barnacles') + " letters in that word");


// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.

function greaterThan (x, y) {
  if (x>y) {
    return true;
  }
  else {
    return false;
  }
}

console.log(greaterThan(5,12));


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.


function greet(name){
  return "Hello " + name + "!";
}

console.log(greet("Nick"));


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.


function madLib(adj, name, verb, noun) {
  return adj + " " + name + " " + verb + "ed the " + noun + "."
}

console.log(madLib("Blue", "Bobby", "play", "the fiddle"));
