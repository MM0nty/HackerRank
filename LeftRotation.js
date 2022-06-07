function rotLeft(a, d) {
    // Write your code here
    let array = [];
for (let i = 0; i < d; i++) {
    array = a.shift();
    a.push(array);
}
console.log(a);
return a;
}
