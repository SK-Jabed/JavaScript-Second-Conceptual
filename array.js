const numbers = [10, 20, 30, 40, 50, 60];
//              [0,   1,  2,  3,  4,  5];

console.log(numbers);
console.log(numbers.length);
console.log(numbers[4]);

const x = numbers[1];
console.log(x);

// Array Push
console.log(numbers);
numbers.push(69);
numbers.push(70);
console.log(numbers);

// Array pop
console.log(numbers);
numbers.pop();
console.log(numbers);

const numbersPop = numbers.pop();
console.log(numbers);
console.log(numbersPop);

const fruits = ["Mango", "Lichi", "Banana"]
const flowers = ["Lily", "Rose", "Sun Flower"];
const num = [1, 2, 3, 4]

const add = fruits.concat(flowers);

console.log(fruits);
console.log(flowers);
console.log(add);

const add2 = flowers.concat(fruits);

console.log(fruits);
console.log(flowers);
console.log(add2);

const add3 = fruits.concat(flowers, num);
console.log(add3);
console.log(add3[5]);

const find = fruits.indexOf("Banana");
console.log(find);
const find2 = fruits.indexOf("Dragon");
console.log(find2);

const flowers2 = ["Lily", "Rose", "Sun Flower"];
console.log(flowers2.includes("Lily"));
console.log(flowers2.includes("rose"));

// "Lily,Rose,Sun Flower"
const flowers3 = flowers2.join(" ");
console.log(typeof[flowers3]);
console.log(flowers3);

const string = "Lily,Rose,Sun Flower";
const convert = string.split(",");
console.log(convert);
console.log(Array.isArray(convert));

const subject = ["English", "Math", "Physics", "Chemistry"];
// slice(1, 4)
console.log(subject.slice(1, 3));

console.log(subject.shift());
console.log(subject.shift());
console.log(subject);

subject.unshift("Science", "Economics");
console.log(subject);
