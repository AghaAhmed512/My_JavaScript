// issue we face before restoperator   : function with multi arguments

function sum(){
    console.log(arguments);
let sum = 0;
    for(let i in arguments){
        sum += arguments[i];
    }
    console.log(sum);
}
//sum(10,20); show correct result
//sum('hello',10,20,30); // this come error when we pass string

// to resolve this issue we use rest operator

function sums(name,course, ...args){
    console.log(arguments);
    console.log(`hello ${name} your are comppleted ${course} course`);
let sums = 0;
    for(let i in args){
        sums += args[i];
    }
    console.log(sums);
}
sums('ahmed',"JavaScript",10,20,30);