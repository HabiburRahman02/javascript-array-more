// system-01 (direct reverse method use)
const numbers = [1, 2, 3, 4, 5];
console.log(numbers)

// const reversedNumbers = numbers.reverse();
// console.log(reversedNumbers)


// system-02 (using for of loop)
const reversedNumbers = []
for (const number of numbers) {
    reversedNumbers.unshift(number);
}
// console.log(reversedNumbers)


// system-02 (using for loop)
// const revNumbers = [];
// for (let i = 0; i < numbers.length; i++) {
//     const num = numbers[i];
//     revNumbers.unshift(num)
// }
// console.log(revNumbers)


// direct for loop;
// const revNumbers = [];
// for (i = numbers.length - 1; i >= 0; i--) {
//     const num = numbers[i]
//     revNumbers.push(num)
// }
// console.log(revNumbers)


// using while loop
const revNumbers = [];
let i = numbers.length -1;
while(i>=0){
    const num = numbers[i];
    revNumbers.push(num)
    i--
}
console.log(revNumbers)