function nestedEvenSum(obj) {
    if (obj.length === 0) return null;
    let evenSum = 0;
    for (k in obj) {
        console.log(k)
        if (typeof obj[k] === 'object' && obj[k] !== null) {
            evenSum += nestedEvenSum(obj[k]);
        } else if (typeof obj[k] === 'number' && obj[k] % 2 === 0) {
            evenSum += obj[k];
        }
    }
    return evenSum;
}


var obj1 = {
    outer: 2,
    obj: {
        inner: 2,
        otherObj: {
            superInner: 2,
            notANumber: true,
            alsoNotANumber: "yup"
        }
    }
}

var obj2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: 'ball', ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: 'car' }
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10