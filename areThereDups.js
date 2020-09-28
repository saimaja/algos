//frequency counter solution

// function areThereDups() {
//     let collection = {};
//     for(let value in arguments) {
//       collection[arguments[value]] ? collection[arguments[value]]++ : collection[arguments[value]]=1;
//     }
//     console.log(collection)
//     for(let key in collection) {
//         if(collection[key] > 1) {
//             return true;
//         } 
//     }
//     return false;
// }

//multiple pointers solution

function areThereDups(...args) {
    args.sort((a, b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length) {
        if(args[start] === args[next]) {
            return true;
        }
        start++;
        next++;
    }
    return false;
}

console.log(areThereDups(1, 2, 3))
console.log(areThereDups(1, 2, 2))
console.log(areThereDups('a', 'b', 'c', 'a'))