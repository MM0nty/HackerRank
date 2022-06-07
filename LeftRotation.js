function rotLeft(a, d) {
    // Write your code here
    let array = [];
for (let i = 0; i < d; i++) {
    array = a.shift(); //Remove element at index 0
    a.push(array); //Add removed element at end of array
}
console.log(a);
return a;
}
