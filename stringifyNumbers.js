function stringifyNumbers(obj) {
    let newObj = {};
    for(let k in obj) {
        if (typeof obj[k] === 'object' && obj[k] !== null){
            newObj[k] = stringifyNumbers(obj[k]);
        } else if(typeof obj[k] === 'number')  {
            newObj[k] = obj[k].toString();
        } else {
            newObj[k] = obj[k]
        }
    }
    return newObj;
}


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj))



