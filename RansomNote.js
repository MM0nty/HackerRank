function checkMagazine(magazine, note) {
    let words = {};
    for (let i of note) {
        //if words[i] is not found, initialize as 1
        if (!words[i]) {
            words[i] = 1;
        }
        //if words[i] is found, add 1
        else {
            words[i] = words[i] + 1;
        }
    }
    for (let i of magazine) {
        //if words[i] is not found, initialize as -1
        if (!words[i]) {
            words[i] = - 1;
        }
        //if words[i] is found, subtract 1
        else {
            words[i] = words[i] - 1;
        }
    }
    for (let i in words) {
        //note words not found in object 'words' have a value of < 0
        if (words[i] > 0) {
            return console.log("No");
        }
    }
    //note words are all found in magazine
    return console.log("Yes");
}
