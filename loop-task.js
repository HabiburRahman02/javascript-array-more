// Write a JavaScript code to reverse the array colors without
//  using the reverse method.
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
console.log(colors)
let reversedColors = []
// for (const color of colors) {
//     reversedColors.unshift(color)
// }
// console.log(reversedColors)

for (let i = 0; i < colors.length; i++) {
    reversedColors.unshift(colors[i])
}
console.log(reversedColors)