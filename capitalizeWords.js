function capitalizeWords(arr) {
   let newArr = []
   
   function helperFunction(arr) {
    if(arr.length === 0) return null;
    let word = arr[0].toUpperCase()
    arr = arr.slice(1)
    newArr.push(word)
    return helperFunction(arr)
   }

   helperFunction(arr)
   return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']