
const countVowels = (word) => {
let vowelCount = 0;
const vowels = ['a','e','i','o','u'];
for (let i = 0; i < word.length; i++) {
if (vowels.includes(word[i])) {
    vowelCount++;
    }

}
return vowelCount
}
module.exports = countVowels;

console.log(countVowels("provide"));
console.log(countVowels("mississippi"));