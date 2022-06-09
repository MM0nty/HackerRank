function sockMerchant(n, ar) {
  let pairs = 0;
  //sort array
  ar.sort();
  for (let i = 0; i < n; i++) {
    //if pair is found
    if (ar[i] === ar[i + 1]) {
      //add to pairs
      pairs++;
      //skip next index (since that was what was paired)
      i++;
    }
  }
  //debug
  console.log(pairs);
  return pairs;
}
