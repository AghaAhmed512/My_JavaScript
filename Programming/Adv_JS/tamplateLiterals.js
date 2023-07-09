// tamplateLiterals or Template string

//before Template string

var user = 'Hello';
var greet = user + "World";

console.log(greet);

/// using Template string
var greet = `${user} World`;
console.log(greet);

let userName = "ahmed";
let marks = 320;
console.log(`Hello ${userName} your marks is ${marks}`);

/////////////////////////////////////////////////////////

let fname = 'agha';
let lname = 'ahmed';
function fullname (){
    return `${fname} ${lname}`;
}
let result = `Hello ${fullname(fname,lname)}`;

console.log(result);