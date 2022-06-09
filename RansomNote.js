function checkMagazine(magazine, note) {
    let words = {};
    for (let i of note) {
        if (!words[i]) {
            words[i] += 1;
        }
        else {
            words[i] = words[i] + 1;
        }
    }
    for (let i of magazine) {
        if (!words[i]) {
            words[i] -= 1;
        }
        else {
            words[i] = words[i] - 1;
        }
    }
    for (let i in words) {
        if (words[i] > 0) {
            return console.log("No");
        }
    }
    return console.log("Yes");
}
