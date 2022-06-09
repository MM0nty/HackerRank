function rotLeft(a, d) {
  let array = [];
  for (let i = 0; i < d; i++) {
    //remove element at index 0
    array = a.shift();
    //add removed element at end of array
    a.push(array);
  }
  console.log(a);
  //return array
  return a;
}
