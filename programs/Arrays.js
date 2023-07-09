//              1 Creating an array

let myArray = [1, 2, 3, 4, 5];
console.log(`1.Array is created: ${myArray}`);

//              2 Accessing array elements

let thirdElement = myArray[2];
console.log(`2.Accessing array elements: ${thirdElement}`);


//              3  Modifying array elements

myArray[2] = 10;
console.log(`3.Modifying array elements: ${myArray}`);

//              4 Adding elements  to the end of an array

myArray.push(6);
console.log(`4.Adding elements  to the end of an array: ${myArray}`);


//              5 Adding elements to the beginning of an array

myArray.unshift(0);
console.log(myArray);

//              6 Removing elements from the end of an array

myArray.pop();
console.log(myArray);

//              7 Removing elements from the beginning  of an array

myArray.shift();
console.log(myArray);