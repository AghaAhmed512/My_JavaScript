//1. Write a program which takes principal,rate of interest and time as input and return simple interest
//hint (principal * rate of interest * time) / 100

function simpleInterest(p, r, t){              // creating function
const simpleInterest = (p * r * t)/100;
return simpleInterest;                         // return function
}

console.log(simpleInterest(10000, 8, 1));