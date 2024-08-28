/*Write a function to count the number of vowels in a string. The function should take a single argument, which is the string to search.
function countVowels(str) {
  let vowels = 'aeiouAEIOU';
  return ...;
}

console.log(countVowels("hello world")); // 3
console.log(countVowels("Javascript")); // 3 */

function countVowels(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
  
    for (let char of str) {
      if (vowels.includes(char)) {
        count++;
      }
    }
  
    return count;
  }
  
  console.log(countVowels("hello world")); 
  console.log(countVowels("Javascript")); 
  