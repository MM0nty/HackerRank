function twoStrings(s1, s2) {
    let letter = {};
    console.log(s1);
    console.log(s2);
    for (let i in s1) {
        if (s2.includes(s1[i])) {
            return "YES";
        }
    }
    return "NO";
}
