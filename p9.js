/* Write a function to reverse a string. The function should take a single argument, which is the string to reverse.
function reverseString(str) {
  return ...;
}

console.log(reverseString("hello")); // "olleh"
console.log(reverseString("world")); // "dlrow" */

function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); 
  console.log(reverseString("world")); 

  /* 
str.split(''):

This splits the string str into an array of individual characters.
For example, "hello" becomes ['h', 'e', 'l', 'l', 'o'].

.reverse():

This reverses the array of characters in place.
['h', 'e', 'l', 'l', 'o'] becomes ['o', 'l', 'l', 'e', 'h'].

.join(''):

This joins the array of characters back into a single string.
['o', 'l', 'l', 'e', 'h'] becomes "olleh". */
  