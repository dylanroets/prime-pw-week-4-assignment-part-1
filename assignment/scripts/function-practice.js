console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return 'Hello, ' + name;
}
// Remember to call the function to test
console.log('Test - Hello and a name:', helloName('Dylan!'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  return (firstNumber + secondNumber);
  // return firstNumber + secondNumber;
}
console.log('Test - Adding two numbers', addNumbers(2,5));

// 4. Function to multiply three numbers & return the result
function multiplyThree( firstNumber, secondNumber, thirdNumber ){
  return (firstNumber * secondNumber * thirdNumber);
}
console.log('Test - Multiply three numbers', multiplyThree(3,5,10));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  }
  else {
    return false;
  }  
}
console.log('Test - True if number is postive, false otherwise', isPositive(0.2));
console.log('Test - True if number is postive, false otherwise', isPositive(0));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast( array ) { 
  return array.pop();
}
console.log('Test - Return the last array item, if empty return undefined:', getLast(['apple', 'banana', 'lemon', 'turnip']));
console.log('Test - Return the last array item, if empty return undefined:', getLast([]));
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find( value, array ){
  for (let index = 0; index < array.length; index++) {
    if (value === array[index]) {
      return true;
    }
  }
  return false;  
}
// I was really confused as to why you couldn't use and else return false. Entering an else cause issues on the console log
console.log('Test - value is set to an array value', find(3, [1, 3, 5, 7, 9]));
console.log('Test - value is NOT set to an array value', find(2, [1, 3, 5, 7, 9]));
// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
