//Day 6 of Daily Tiny Programming
//This is a simple Pig Latin translator in JavaScript
//Pig Latin is a language game where words in English are altered
//The rules for Pig Latin are as follows:
//1. For words that begin with a consonant or consonant cluster, move the consonant(s) to the end of the word and add "ay"
//   Example: "hello" becomes "ellohay", "string" becomes "ingstray"
//2. For words that begin with a vowel, simply add "way" to the end of the word
//   Example: "apple" becomes "appleway", "orange" becomes "orangeway"
//3. Preserve the case of the original word (e.g., "Hello" becomes "Ellohay")
//4. Punctuation should remain at the end of the word (e.g., "hello!" becomes "ellohay!")
//5. Non-alphabetic characters should remain unchanged

const prompt = require('prompt-sync')({sigint: true});
const pig = prompt('Enter a word to translate to Pig Latin: ');
let pigLatin = pig.split(' ');

const vowels = new Map();
vowels.set('a', true);
vowels.set('e', true);
vowels.set('i', true);
vowels.set('o', true);
vowels.set('u', true);
console.log(translatePigLatin(pigLatin));

function translatePigLatin(pigLatin) {
    for (let i = 0; i < pigLatin.length; i++) {
    //1. For words that begin with a consonant or consonant cluster, move the consonant(s) to the end of the word and add "ay"
    //   Example: "hello" becomes "ellohay", "string" becomes "ingstray"
    //locate character at index 0
    const firstChar = pigLatin[i].charAt(0).toLowerCase();
    if (!vowels.has(firstChar)) {
        //locate consonant cluster
        pigLatin[i] = pigLatin[i].substring(1) + firstChar + "ay";  

    } else { 
    //2. For words that begin with a vowel, simply add "way" to the end of the word
    //   Example: "apple" becomes "appleway", "orange" becomes "orangeway"
        pigLatin[i] = pigLatin[i] + "way";
    }

    }
    let result = pigLatin.join(' ');
    return result;
}


