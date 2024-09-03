const friends = ['nalia', 'kalia', 'salia', 'palia', 'alia'];
// console.log(friends)
const sortFriends = friends.sort();
// console.log(friends)

// Ascending ---> smaller to larger
// Descending ---> larger to smaller

const numbers = [5, 34, 1, 6, 8, 2];
console.log(numbers)
const numbersAsc = [... numbers].sort(function (a, b) {return a - b });
const numbersDsc = [... numbers].sort(function (a, b) {return b - a });
console.log(numbersAsc)
console.log(numbersDsc)


