// sum of array numbers
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for(let item of numbers) {
  // sum = sum + item;
  sum += item;
}
console.log(sum);

let evens = [];

// Even Numbers
for(let item of numbers) {
    if(item % 2 === 0) {
        evens.push(item);
    }
}
console.log(evens);

// Odd numbers

for(let item of numbers) {
    if(item % 2 === 1) {
        odds.push(item);
    }
}
console.log(odds);



// const x = 6;
// console.log(x % 2);