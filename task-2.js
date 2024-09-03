// Write a JavaScript code to get the even numbers from an array 
// using any looping technique.
const numbers = [12, 98, 5, 41, 23, 78, 46];

let newArray = [];
// for(number of numbers){
//     if(number%2===0){
//         newArray.push(number)
//     }
// }
// console.log(newArray)

for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
        newArray.push(num)
    }
}
console.log(newArray)

