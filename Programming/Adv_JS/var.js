// using var
//1 we can declare variable,
//2 we can redeclare same variable
//3 we can re assign the value to same variable
//4 var = global scope
var a = 'Hello';// declare a variable using 'a'
console.log(a);
var a = 'World';// re declare a variable 'a'
console.log(a);
a = 'Hello World'; // re assign value to variable 'a'
console.log(a);

var c=2;
if(1 === 1){
    var b = 1;
}
console.log(b,c);