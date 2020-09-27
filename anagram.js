function validAnagram(str1, str2) {
    //if lengths don't match, return false
    if (str1.length !== str2.length) return false;

    //make object
    let obj = {};

    //loop through str1 and count frequency of characters
    for (let char of str1) {
        obj[char] ? obj[char] += 1 : obj[char] = 1;
    }
    console.log(obj)
    //loop through str2 and count frequency of characters
    for (let char of str2) {
        //if key does not exist return false
        if (!obj[char]) {
            return false;
            //else remove count from key
        } else {
            obj[char] -= 1;
        }
    }
    return true
}

console.log(validAnagram('iiceman', 'ciinema'))