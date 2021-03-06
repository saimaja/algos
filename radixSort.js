function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for(let i=0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let most = mostDigits(nums);
    // console.log(most)
    for(let k=0; k < most; k++){
        let buckets = Array.from({length: 6}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            buckets[digit].push(nums[i]);
            
        }
        // console.log(buckets);
        nums = [].concat(...buckets);
        // console.log(nums);
    }
    return nums;
}

console.log(radixSort([234, 543, 1235, 12, 534, 10, 1]));