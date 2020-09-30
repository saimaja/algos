// function capitalizeFirst(arr) {
//     let newArr = [];
//     if(arr.length === 0 ) return null;
//     for(let i=0; i<arr.length; i++) {
//         let word = arr[i]
//         console.log(word.charAt(0).toUpperCase() + word.slice(1));
//     }
//   return newArr;
// }


// function capitalizeFirstRecur(arr) {
//     let newArr = [];

// function helperFunction(arr) {
//     if (arr.length === 0) return null;
//     let capWord = arr[0][0].toUpperCase() + arr[0].slice(1)
//     arr = arr.slice(1);
//     newArr.push(capWord)
//     helperFunction(arr)
// }

// helperFunction(arr)
// return newArr;

// }

function capitalizeFirstRecur2(arr, currentInd = 0) {
    console.log(arr, currentInd)
    if (arr.length === currentInd) return arr;
    let word = arr[currentInd][0].toUpperCase() + arr[currentInd].slice(1)
    arr[currentInd] = word
    return capitalizeFirstRecur2(arr, currentInd + 1)
}



console.log(capitalizeFirstRecur2(['car', 'taco', 'banana'])); // ['Car','Taco','Banana']