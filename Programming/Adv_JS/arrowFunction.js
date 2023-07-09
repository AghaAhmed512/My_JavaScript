//before arrow function 
// 1 way
function hello(){
console.log('Hello');
}
hello();
//2 way

let sayHello = function (){
    console.log('Say Hello');
    }
sayHello();
//////////////////////////////////////////////////////////
// Arrow function 

let sayHelloEveryOne = () =>{ console.log('Say Hello To Every One')};
sayHelloEveryOne();
///////////////////////////////////////////////////////

//old way to create function
let welcome = function(name){
return `hello and welcome ${name} : create using old style of function`;
}
console.log(welcome('Ahmed'));
/////////////////////////////////
//conver above into arrow

// let sayWelcome = (name) =>{
//     return `hello and welcome ${name} : create using new style arrow function`;
// }
//     console.log(sayWelcome('Ahmed'));

// if we have single line of code so we also remove {} brackets and return keyword
// if we know we have one parameter in round braces of function then we can also remove it ()   

// like this
let sayWelcome = name =>`hello and welcome ${name} : create using new style arrow function`;

console.log(sayWelcome('Ahmed'));
