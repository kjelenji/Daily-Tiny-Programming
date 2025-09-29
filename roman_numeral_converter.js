//Day 5 of Daily Tiny Programming
//converts Roman numerals to integers
const prompt = require('prompt-sync')({ sigint: true });
const s = prompt('Enter a Roman numeral: ');
const num = prompt("Enter an integer (1-3999): ");
const romanNumeral = new Map();
romanNumeral.set('I', 1);  
romanNumeral.set('V', 5);  
romanNumeral.set('X', 10);  
romanNumeral.set('L', 50);  
romanNumeral.set('C', 100);  
romanNumeral.set('D', 500);  
romanNumeral.set('M', 1000);  
romanNumeral.set('IV', 4);  
romanNumeral.set('IX', 9);  
romanNumeral.set('XL', 40);  
romanNumeral.set('XC', 90);  
romanNumeral.set('CD', 400);  
romanNumeral.set('CM', 900);        
console.log(romanToInt(s));
console.log(intToRoman(parseInt(num, 10)));

// Convert Roman -> Integer (supports subtractive rules)
function romanToInt(s) {
  if (!s || typeof s !== 'string') throw new Error('Input must be a non-empty string');
  s = s.toUpperCase();
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const curr = romanNumeral.get(s[i]);
    const next = romanNumeral.get(s[i + 1]) || 0;
    if (!curr) throw new Error(`Invalid Roman numeral character: ${s[i]}`);
    if (curr < next) total -= curr;
    else total += curr;
  }
  return total;
}
