// using let
//1 we can declare variable,
//2 we can not redeclare same variable
//3 we can re assign the value to same variable
//4 let = block scope

let a = 'Hello';// declare 'a' variable using let
console.log(a);
// let a = 'World';// re declare 'a' variable let..... give syntex error
// console.log(a);
a = 'Hello World'; // re assign value to variable 'a' using let
console.log(a);

let c=2;
if(1 === 1){
    let b = 1;
}
console.log(b);// we should define it uder if brackets
console.log(c);