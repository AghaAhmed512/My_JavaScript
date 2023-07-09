// using const
//1 we can declare variable,
//2 we can not redeclare same variable
//3 we can not re assign the value to same variable
//4 const = block scope

const a = 'Hello';// declare 'a' variable using const
console.log(a);
// const a = 'World';// re declare 'a' variable const..... give syntex error
// // console.log(a);
a = 'Hello World'; // re assign value to variable 'a' using const.......give syntex error
console.log(a);

const c = 2;
if(1 === 1){
    const b = 1;
}
console.log(b);// we should define it uder if brackets
console.log(c);