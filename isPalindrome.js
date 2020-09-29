function isPalindrome(str) {
    if(str.length === 1) return true;
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1))
    return false;
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('foobar'))
console.log(isPalindrome('tacocat'))
console.log(isPalindrome('amanaplanacanalpanama'))
console.log(isPalindrome('amanaplanacanalpandemonium'))