function collectStrings(obj) {
    let array = [];

    function helperMethod(obj) {
    for(let k in obj) {
        if(typeof obj[k] === 'object' && obj[k] !== null) {
            return helperMethod(obj[k]);
        } else if (typeof obj[k] === 'string') {
            // newObj[k] = obj[k];
            array.push(obj[k]);
            
            }
        }
    }
    helperMethod(obj)
    return array;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])