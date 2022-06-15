/* IN PROGRESS
"Two strings are anagrams of each other if the first string's letters can be rearranged to form the second string. In other words, both strings must contain the same exact letters in the same exact frequency."
function makeAnagram(a, b) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        if (!b.includes(a[i])) {
            console.log("a ", a, "b ", i, b[i]);
            console.log(b.includes(a[i]));
            // b = b.slice(a[i]);
            count++;
            console.log("[i] count ", count);
        }
        else {
            console.log("a ", a, "b ", i, b[i]);
            console.log(b.includes(a[i]));
        }
    }
    for (let j = 0; j < b.length; j++) {
        if (!a.includes(b[j])) {
            console.log("a ", a, "b ", j, b[j]);
            console.log(a.includes(b[j]));
            // a = a.slice(b[j]);
            count++;
            console.log("[j] count ", count);
        }
        else {
            console.log("a ", a, "b ", j, b[j]);
            console.log(a.includes(b[j]));
        }
    }
    return count;
}
*/
