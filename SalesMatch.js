function sockMerchant(n, ar) {
    // Write your code here
    let pairs = 0;
    ar.sort();
    for (let i = 0; i < n; i++) {
        if (ar[i] === ar[i + 1]) {
            pairs++;
            i++;
        }
    }
    return pairs;
}
