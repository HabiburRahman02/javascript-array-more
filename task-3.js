// Use a for...of loop to concatenate all the elements of an array
//  into a single string.
var names = ['Tom', 'Tim', 'Tin', 'Tik']
const divided = names.join('')
// console.log(divided)

// Reverse the words of a sentence. Only the position of the word
//  will be reversed. check out the output
const statement = 'I am a hard working person';
const reverseWord = statement.split(' ');
const storeSentence = [];
for (const word of reverseWord) {
    storeSentence.unshift(word);
}
const sentenceResult = storeSentence.join(' ');
console.log( sentenceResult)