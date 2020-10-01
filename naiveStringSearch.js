function naiveStringSearch(strlong, strshort) {
    let match = 0;
    for (let i = 0; i < strlong.length; i++) {
        for (let j = 0; j < strshort.length; j++) {
            if (strlong[i + j] !== strshort[j]) break;
            if (j === strshort.length - 1) match++;
        }
    }
    return match;
}

console.log(naiveStringSearch('wowowomg', 'omg'))
console.log(naiveStringSearch('banananana', 'na'))
console.log(naiveStringSearch('lost', 'omg'))
console.log(naiveStringSearch('lorie loled', 'lol'))