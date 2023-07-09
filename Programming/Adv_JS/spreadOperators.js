//The spread operator in JavaScript is represented by three dots (...) and is used to spread the elements of an
//array or an object into another array or object. The spread operator allows you to expand an iterable object
// such as an array, a string, or an object into individual elements.

// function sums(name,course, ...args){
//     console.log(arguments);
//     console.log(`hello ${name} your are comppleted ${course} course`);
// let sums = 0;
//     for(let i in args){
//         sums += args[i];
//     }
//     console.log(sums);
// }
// let arr = [10,20,30];
// sums('ahmed',"JavaScript",...arr); // spread use here


////////////////////////////////////////////////////////////

// let arr = [10,20,30];
// console.log(arr);
// console.log(...arr);


///////////////////////////////////////////////


// let arr1 = [10,20,30,40];
// let arr2 = arr1;
// arr1.push(50);
// console.log(arr2);
// console.log(arr1);

/////////////////////////////////
//above using spread
// let arr1 = [10,20,30,40];
// let arr2 = [...arr1];
// arr1.push(50);
// console.log(arr2);
// console.log(arr1);

//////////////////////////////////
//concat before spread

// let arr1 = [10,20,30,40];
// let arr2 = [50,60];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
////////////////////////////////
//using spread

// let arr1 = [10,20,30,40];
// let arr2 = [50,60];
// let arr3 = [0,...arr1, ...arr2,70]; // older we do this step using push pull and concat 
// console.log(arr3);

////////////////////////////////////////
// object with psread
let obj1 = {
    name:'ahmed'
}
let obj2 = {
    age: 26
}

let obj3 = {...obj1,...obj2};
console.log(obj3);