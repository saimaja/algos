function pivot(arr, start = 0, end = arr.length-1) {
    let pivot = arr[start];
    let swapInd = start;

    for(let i=start+1; i < arr.length; i++) {
        if(pivot > arr[i]) {
            swapInd++;
            [arr[i], arr[swapInd]] = [arr[swapInd], arr[i]];
        }
    }
    [arr[swapInd], arr[start]] = [arr[start], arr[swapInd]];
    return swapInd;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if(left < right) {
    let pivotInd = pivot(arr, left, right) //pivotInd = 3
    //left
    quickSort(arr, left, pivotInd - 1);
    //right
    quickSort(arr, pivotInd + 1, right);
    }
    return arr;
}

console.log(quickSort([-100, 4, 6, 9, 1, 2, 5, 3]))