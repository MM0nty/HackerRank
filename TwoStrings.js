function twoStrings(s1, s2) {
    let letter = {};
    //values of s1 and s2
    console.log(s1);
    console.log(s2);
    for (let i in s1) {
        //s2 has s1[i] anywhere
        if (s2.includes(s1[i])) {
            return "YES";
        }
    }
    return "NO";
}
