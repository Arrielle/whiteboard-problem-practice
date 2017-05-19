// Question:
//
// A palindromeic number reads the same both ways.
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 x 99.
//
// Find the largest palindrome made from the product of two 3 digit numbers.
//
// Answer:

largestPalindrome();

function largestPalindrome(){
  const smallestNum = 100;
  const largestNum = 999;
  let array = [];

  for (var i = smallestNum; i <= largestNum; i++) {
    for (var j = smallestNum; j <= largestNum; j++) {
      var sum = i * j;
      if (palindrome(sum)){
        array.push(sum);
      }
    }
  }
  //find the largest number from the array
  // palindrome = Math.max.apply(Math, array);
  findLargest(array);
}

//determine if a number is a palindrome
function palindrome(x){
  let numberToCheck = x;
  let string = numberToCheck.toString();
  let stringBackwards = '';
  let palindrome = 0;

  //push the number into the 'backwards string'
  for (var i = string.length - 1; i >= 0; i--) {
    stringBackwards += string.charAt(i);
  }
  //compare string to backwards string to determine if it's a palindrome
  if (stringBackwards == string) {
    return true;
  }
}

//find the largest number in an array
function findLargest(array){
  var max = 0;
  for (i = 0; i < array.length; ++i) {
      if (array[i] > max) {
          max = array[i];
      }
  }
  console.log(max);
}
