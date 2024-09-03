/**
 * for loop syntax: for(starting value, end condition, increment or decrement) {

}

*/

for(let i = 0; i <= 5; i++) {
    console.log(i);
}

const subject = ["English", "Math", "Physics", "Chemistry"];

for(let i = 1; i < 3; i++){
    // console.log(subject);
    console.log(subject[i]);
}

for(let i = 0; i < subject.length; i++){
    console.log(subject[i]);
}

for(let i = subject.length-1; i >= 0; i--) {
    console.log(subject[i]);
}


/**
 * while loop syntax:
 * while(condition) {
 *    tasks      
 *    looping increment or decrement
 * }
*/

let i = 0;

while(i < subject.length) {
    console.log(subject[i]);
    i++;
}

let j = subject.length - 1;
while(i >= 0) {
    console.log(subject[i]);
    i--;
}

const brands = ["Apple", "Microsoft", "HP", "Lenovo", "Samsung"];

for(let brand of brands) {
    console.log(brand);
}

for(let brand of brands.reverse()) {
    console.log(brand);
}


