
function averagePair(arr, average) {
    if(arr.length === 0) return false;
    let left = 0;
    let right = arr.length-1;
    while(left < right) {
        let pair = (arr[left] + arr[right])/2;
        console.log(pair)
        if(pair === average) {
            return true;
        } else if (pair < average){
            left++;
        } else {
            right--
        }
    }
    return false;
}

console.log(averagePair([1, 2, 3], 2.5))
console.log(averagePair([-1, 0, 2, 3, 4, 5, 6], 4.1))
console.log(averagePair([], 4))