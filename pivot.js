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

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))