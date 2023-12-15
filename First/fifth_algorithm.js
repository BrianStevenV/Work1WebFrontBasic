const letter = prompt("Enter your letter").toLowerCase();
const isVowel = letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"
console.log("The letter is vowel: " + isVowel);