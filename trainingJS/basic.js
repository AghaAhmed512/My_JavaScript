// // console.log are use to print data the in console
// console.log('Hello World');
// //for create variable we use Let , var keyword
// let firstName = 'agha';
// let lastName = 'ahmed';
// console.log(firstName, lastName);
// //change value of variable
// firstName = 'Agha Muhammad';
// lastName = 'Ahmed Mehmood';
// console.log(firstName, lastName);
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// //for create constant we use const keyword
// const myFullName = 'Hafiz Agha Muhammad Ahmed Mehmood'
// console.log(myFullName);

// // Variable naming rules
// // 1 No Spaces
// // 2 Variable must begin with _ , $ , letter
// // 3 can contain numner,letters, underscore and dollar sign
// // 4 Case sensitive

                            // // Common Data Types in JS////
// // 1 String
// // 2 Number
// // 3 Boolean
// // 4 Undefined

// let stringType = 'agha ahmed';
// let integer = 123;
// let boolType1 = true;
// let boolType2 = false;
// let undefinedType;
// console.log(stringType);
// console.log(integer);
// console.log(boolType1, boolType2);
// console.log(undefinedType);

// console.log(typeof stringType);
// console.log(typeof integer);
// console.log(typeof boolType1,typeof boolType2);
// console.log(typeof undefinedType);

                                   // // Strings////
// let fName = 'agha';
// let Lname = 'ahmed';
// let fullName = fName + ' ' + Lname;
// console.log(fullName);

// let firstName = "Agha";
// let lastName = 'Ahmed'
// let fullName = `${firstName} ${lastName} is my full name`;
// console.log(fullName);
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());
// console.log(fullName.length);
// let message = 'it\'s OK';
// console.log(message);

                                    // Arithmatic Operator //
// Addition +
// Subtraction operation -
// multiplication *
// Division /
// reminder %
// increment ++
// decrement --
// Exponentional **

// var num1 = 10;
// var num2 = 5;

// var sum = num1 + num2;
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var rem = num1 % num2;  
// console.log(num1,num2);
// console.log(sum);
// console.log(sub);
// console.log(mul);
// console.log(div);
// console.log(rem);
// var num0 = 22;
// num0++;
// console.log(num0);
// var num0 = 22;
// num0--;
// console.log(num0);

// var num3 = 3;
// var ex = num3 ** 3;
// console.log(ex);

                              /// Arrays//
// var frients = new Array ('Ahmed','shahrukh','mubeen'); // old syntax
// console.log(frients);
// let fruits = ['Apple','Mango','Banana']; // new syntex
// console.log(fruits);
// console.log(fruits[0]);

// fruits.push('Orange'); // add element at last 
// console.log(fruits);

// fruits.unshift('watermalon'); // add element at first
// console.log(fruits);

// fruits.pop();   // del last element of the list
// console.log(fruits);

// fruits.shift(); // del first element of the list
// console.log(fruits);

// console.log(fruits.length); // lenght of the list

                         /// Object Literals//

// let person = {
//     firstName   : 'Ahmed',
//     lastName    : 'Mehmood',
//     phoneNo     : '0302-4116225',
//     emailId     : 'ahmed.mehmood@arbisoft.com',
//     Designation : 'E-Learning Technical Developer',
//     skills      : ['HTML','CSS','JavaScript'],
//     CompanyName : 'Arbisoft',
//     address     : '25 Canal Rd, Westwood Colony Lahore, Punjab 54000',
// };
// console.log(person);
// console.log(person.firstName,person.lastName,person.phoneNo, person.emailId,
// person.Designation,person.skills, person.CompanyName, person.address);

// person.age = 19;
// console.log(person);

                           /// Array of Object literals ///

// let person = [
//     {
//         name : 'Agha',
//         age  : '25',
//         isCOder: true,
//     },
//     {
//         name : 'Ahmed',
//         age  : '26',
//         isCOder: false,
//     },
//     {
//         name : 'Mehmood',
//         age  : '27',
//         isCOder: false,
//     },
// ];   
// console.log(person);                        

                         //Conditionals in JS//
//If Else                         

// let age = 17;
// if (age < 18){
//     console.log('You Can Not Drive');
// }else{
//     console.log('You Can Get Licences')
// }

///                comparison operators
// 1 >   Greater then 
// 2 <   Less then
// 3 >=  Greater then and equal to
// 4 <=  Less then and equal to
// 5 ==  Equal to
// 6 !=  Not Equal to
// 7 === Equal value to and equal type
// 8 !== Not Equal value or not Equal type

// let age1 = 19;    //Greater then
// if(age1 > 18){
//     console.log('age1 is Greater then 18')
// }else{
//     console.log('age1 is less then 18')
// }

// let age2 = 19;  // less then
// if (age2 < 20){
//     console.log("age2 is less then 20 ")
// }else{
//     console.log('age2 is Greater tthen 20')
// }
// let age3 = 17;  // greater then or equal to
// if(age3 >= 17){
//     console.log('age3 is Greater then or equal to 17')
// }else{
//     console.log('age3 is less then 17')
// }
// let age4 = 17;      // less then or equal to
// if(age4 <= 17){
//     console.log('age4 is Less then or equal to 17')
// }else{
//     console.log('age4 is Greater then 17')
// }

// let age5 = 15;      // equal to
// if(age5 == 15){
//     console.log('age5 is equal to 15')
// }else{
//     console.log('age5 is not equal to 15')
// }

// let age6 = 14;      // Not equal to
// if(age5 != 15){
//     console.log('age6 is equal to 15')
// }else{
//     console.log('age6 is not equal to 15')
// }

// let age7 = 14;      // equal vale and type
// if(age7 === 14){
//     console.log('age7 is equal to 14')
// }else{
//     console.log('age7 is not equal to 14')
// }

// let age8 = 14;      // not equal vale or not equal type
// if(age8 !== '14'){
//     console.log('age8 is not equal to 14')
// }else{
//     console.log('age8 is equal to 14')
// }

///                Else if condition ////

// let age = 18;
// if(age === 18){
//     console.log('age is qual to 18')
// }else if(age > 18){
//     console.log('age is greater then 18')
// }else{
//     console.log('age is less then 18')
// }

///      Logical operator ///
// 1 &&  and operator
// 2 ||  Or  operator

// let age = 30;
// if (age > 18 && age < 65){               // both condition must true
//     console.log('You Are Safe To Drive')
// }else{
//     console.log('You Are Not Safe To Drive')
// }

// let aGe = 70;
// if (aGe > 18 || aGe < 65){               // one condition must true
//     console.log('You Are Safe To Drive')
// }else{
//     console.log('You Are Not Safe To Drive')
// }

// Switch Statement ///
// let fruits = 'Apple';
// switch(fruits){
//     case 'Apple':
//         console.log('Your Fav fruit is Apple')
//         break;
//     case 'Mango':
//         console.log('Your Fav fruit is Mango')
//         break;
//     case 'Banana':
//         console.log('Your Fav fruit is Banana')
//         break;
//     case 'Watermalon':
//         console.log('Your Fav fruit is Watermalon')
//         break;
//     default:
//         console.log('Please Enter Other Fruit Name')                
// }

                                 // Loops ///
// for(let i = 0; i < 5; i++){
//     console.log(i, 'program using for loop with increment operator');
// }                                 
// for(let j = 3; j > 0; j--){
//     console.log(j,'program using for loop with decrement operator');
// }
// let fruit = ['Apple', 'Mango','Banana'];
// for(i = 0; i < fruit.length; i++){
//     console.log(fruit[i]);
// }
// // While Loop
// let x = 0;
// while(x < 3){
//     console.log(x,'This Condition Runs until the value of variable is less then 3')
//     x++;
// }
// let fruit = ['Apple','Mango','Banana'];
// i = 0;
// while(i < fruit.length){
//     console.log(fruit[i])
//     i++;
// }
// For of Loop
// let fruits = ['Apple','Mango','Banana','Orange'];
// for (fruit of fruits){
//     console.log(fruit);
// }

// Functions: A Group/Block of code that performs a perticular task
           /// function without parameter
// function printDetails(){
//     console.log('First Name: Agha Muhammad');
//     console.log('Last Name: Ahmed Mehmood');
//     console.log('Age: 30');
//     console.log('Email Id: aghaahmed512@gmail.com');
// }
// printDetails();

// let fruits = ['Apple','Mango','Banana','Watermalon'];

// function printElements() {
//     for(fruit of fruits){
//         console.log(fruit);
//     }
// }
// printElements();

//              function with parameter
// let fruits = ['Apple','Mango','Banana','Watermalon'];
// let codingLanguagues = ['HTML','CSS','Java Script','Python'];
// function printElements(myArray){
//     for( i of myArray){
//         console.log(i)
//     }
// }
// printElements(fruits);
// printElements(codingLanguagues);

                // return type function//
// function sum(num1, num2){
//     const sum = num1 + num2;
//     //console.log(sum);
//     return sum;
// }                
// //sum(12,13);
// const mySum = sum(12, 13);
// console.log(mySum);
// const mySum2 = mySum + 10;
// console.log(mySum2);

                    // Arrow Function//
// const sum = (num1, num2) =>{
//     const sum = num1 +num2;
//     return sum;
// // }   
// let mySum = sum(1, 3);
// console.log(mySum);
               // same program given below in other way
const sum = (num1, num2) => {
    return num1 + num2;
}
let mySum = sum(1,2);
console.log(mySum);


const greetings = (targetName) => {
    console.log('Assalam o Alikum',targetName,'How are you!!');
}

greetings('Agha Ahmed')