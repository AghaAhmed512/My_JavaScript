/// Program to find  biggest number in the array given and its index in the array.

let arr = [3,8,5,99,6,24,98,66];                         ///Create an Array
console.log("Array is "+ arr);                          /// Printing Array
let max_val = Math.max(...arr);                        ///  Find max value
console.log("Max value is "+max_val);                 ///   Print max value  
let max_index = arr.indexOf(max_val);                ///    Find the index of highest value
console.log("Max value index is: " + max_index);    ///     Print the max value index
