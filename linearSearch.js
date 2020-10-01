function linearSearch(arr, currentEl) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === currentEl) return i;
    }
    return -1;
}


console.log(linearSearch([10, 15, 20, 25, 30], 25))
console.log(linearSearch([10, 15, 20, 25, 30], 1))
console.log(linearSearch([10, 15, 20, 25, 30], 10))