function sameFrequency(num1, num2) {
    if (num1.length !== num2.length) return false;
    let str1 = num1.toString();
    let str2 = num2.toString();
    let obj = {};

    for (let char of str1) {
        obj[char] ? obj[char]++ : obj[char] = 1;
    }
    console.log(obj)
    for (let char of str2) {
        if (!obj[char]) {
            return false;
        } else {
            obj[char]--;
        }
    }
    return true;
}

console.log(sameFrequency(182, 281))
console.log(sameFrequency(34, 14))
console.log(sameFrequency(22, 222))
console.log(sameFrequency(22121212, 22222111))
