
//Create a function that takes an object and returns the keys and values as separate arrays. 
//Return the keys sorted alphabetically and their corresponding values in the same order.

//keysAndValues({ a: 1, b: 2, c: 3 })
//   ➞    [["a", "b", "c"], [1, 2, 3]]

//keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
 //  ➞    [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

//keysAndValues({ key1: true, key2: false, key3: undefined })
//   ➞    [["key1", "key2", "key3"], [true, false, undefined]]


function keysAndValues(alphabet){
console.log(alphabet)
console.log(Object.keys(alphabet));
console.log(Object.values(alphabet));
const arr = [ ]
arr.push(Object.keys(alphabet), Object.values(alphabet))
console.log(arr)
}

keysAndValues({ a: 1, b: 2, c: 3 })
//   ➞    [["a", "b", "c"], [1, 2, 3]]