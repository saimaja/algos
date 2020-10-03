// function insertionSort2(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         let currentVal = arr[i];
//         for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j + 1] = arr[j];
//             console.log(j)
//         }
//         // console.log(j)
//         // arr[j + 1] = currentVal;
//         // console.log(arr)
//     }
//     return arr;
// }

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currentVal) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = currentVal;
    }
    return arr;
};


console.log(insertionSort([3, 89, 5, 7, 8, 4]))