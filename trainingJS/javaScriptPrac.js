//program in which variables are defined and print

//                       Program 1
// let device = 'PC';
// let number = 5;
// console.log(number + " " + device);

//                       Program 2
// let number = 14 % 3;
// console.log(number); 

//                       Program 3

// let val = 8;
// val = 2;
// console.log(val);

//                       Program 4

// let num = 2;
// num = num + 3;
// console.log(num);

//                       Program 5

// let num = 4;
// num *= 3;
// console.log(num);


//                        Program 6

// let num = 4 + 6;   // 10
// num /= 2;          //num = 10 / 2; 
// num *=3;           // num = 5 * 3;
// console.log(num);     // num = 15  


//                        Program 7

// let a = 3;
// let b = 2;

// a *= b;     //a = a*b;    =>  a = 3 * 2; a = 6;
// b *= a;     //b = b*a     =>  b = 2 * 6; b = 12;
// console.log(b);

////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
//                        If Statement   
///////////////////////////////////////////////////////////////////
///                    Program 1

// let age = 18;
// if(age >= 21){         // age is grater then and equal to 21    => 18 >= 21
//     console.log("a ");
// }
// if(age < 30){          // age is lesser then to 21    => 18 < 21
//     console.log("b");
// }


// //              Program 2

// let pageCount = 100;
// if (pageCount > 100){         // 100 > 100
//     console.log("a ");
// }

// if(pageCount >= 100 ){       // 100 > = 100
//     console.log("b");
// }
//                 //              Program 3
// let num = 3;
// if(num === 3){
//     console.log("a ");
// }
// if(num !== 3){
//     console.log("b");
// }
// //                                    Program 4
// let score = 87;
// if(score <= 87){      // 87 <= 87
//     console.log("1");
// }
// if(score === 87){
//     console.log("2");
// }


//                                   Program 5


// let num = 77;
// let rem = num % 2;

// if(rem === 0){
//     console.log("even");
// }

// if(rem === 1){
//     console.log("odd");
// }

////////////////////////////////////////////////////////////////////////////////
//                               Logical Operators
//////////////////////////////////////////////////////////////////////////////
//                     Program 1
// let num = 7;
// if(num > 7 || num < 21){      // 7 > 7 or 7 < 21    (7 greater then 7 or 7 less then 21 )
//     console.log("1");
// }
// if (num > 10 || num < 15){    // 7 > 10 or 7 < 15   (7 is greater then 10 or 7 is less then 15)
//     console.log("2");
// }

//                       program 2

// let age = 17;
// if (age > 13 && age < 21){        //17 > 13  && 17 < 21 ( 17 is greater then 13 and 17 is lesser then 21) 
//     console.log("1");
// }
// if(age > 21 && age < 60){        //17 > 21 && 17 < 60 ( 17 is greater then 21 and 17 is lesser then 60)
//     console.log("2");
// }

//                      Program 3

// let level = 5;

// if(level > 0 && level < 11){    // 5 > 0 && 5 < 11 (5 is greater then 0 AND 5 is lesser then 11) true
//     console.log("Valid");
// }
// if(level === 5 || level === 7){  // 5===5 || 5 === 7 (5 is equal to 5 or 5 is equal to 7 ) true
//     console.log("special");
// }
 //                             Program 4
// let height = 165;
// if(!(height === 160)){   // !(165 === 160) =>    165 is not equal to 160 ....true
//     console.log("1");
// }
// if(!(height > 150 && height < 200)){     // !(165 > 150 && 165 < 200) => 165 is not Greater then to 150 AND 165 is not lesser then 200
//     console.log("2");
// }

//                                 Program 5

// let code = 301;
// if(!(code >= 100 && code <= 200)){   // !(301 >= 100 && 301 <=200) 301 is not greater or equal to 100 AND 301 is not lesser or equal to 200
// console.log("1");
// }
// if(!(code >= 400 || code == 301)){  // !(301 >= 400 || 301 ==301) (301 is not greater or equal to 400 OR 301 is not equal to 301)
//     console.log("2");
//     }

//////////////////////////////////////////////////////////////////
//                             If Elase Statement
//////////////////////////////////////////////////////////////////  
// Program 1
// let age = 17;
// if(age === 17){
//     console.log("1 ");
// }else{
//     console.log("2 ");
// }
                      // Program 2
// let num = 5;
// if(num === 3){
//     console.log("1 ");
// }else{
//     console.log("2 ");
// }

                        //program 3
// let num = 15;        
// if(num === 14){             // 15 = 14(false)
//     console.log("1");
// }else if(num === 15){        // 15 = 15 true
//     console.log("2");
// }else{
//     console.log("3");
// }                        


//                    Program 4
// let score = 90;

// if(score <= 50){       // 90 <= 50;
//     console.log("low");
// }else if(score <= 75){         //90 <= 75
//     console.log("medium");
// }else{
//     console.log("high");
// }

//                     Program 5

// let num = 75;
// if(num <= 50){   //75 <= 50
    
// }else if(num <= 75){       //75 <= 75
//     console.log("1");
// }else if (num <= 80){     //75 < = 80
//     console.log("2");
// }

//////////////////////////////////////////////////////////////////
//                Switch Statement
/////////////////////////////////////////////////////////////////
//              Program 1

// let num = 2;
// switch(num){
//     case 1:
//         console.log("a");
//         break;
//     case 2:
//         console.log("b");
//         break;
//     case 3:
//         console.log("c");
//         break;        
// }

//               Program 2
// let num =10;
// switch(num){
//     case 10:
//         console.log("a");
//         break;
//     case 20:
//         console.log("b");
//         break;
//     default:
//         console.log("c");
//         break;        
// }

//              Program 3

// let num =5;
// switch(num){
//     case 3:
//         console.log("a");
//         break;
//     case 4:
//         console.log("b");
//         break;
//     default:
//         console.log("c");
//         break;        
// }

//              Program 4

// let age = 15;
// switch(age){
//     case 10:
//     case 11:
//     case 12:
//     case 13:
//         console.log("Middle School");
//         break;
//     case 14:
//     case 15:
//     case 16:
//     case 17:
//     case 18:
//         console.log("High School");
//         break; 
//     default:
//         console.log("Primary School");
//         break;                       

// }


//               Program 5

// let level = 8;
// switch(level){
//     case 1:
//     case 2:
//     case 3:
//     case 4:
//         console.log("Easy");
//         break;
//     case 5:
//     case 6:
//     case 7:
//         console.log("Medium");
//         break;
//     default:
//         console.log("Tricky");
//         break;                            
// }

////////////////////////////////////////////////////////////////////
//             While Loop
///////////////////////////////////////////////////////////////////
///            Program 1

// let num = 0;
// while(num < 3){        // (0 < 3 print 0), (1< 3 print 1), (2 < 3 print 2) , (3 < 3 break);  
//     console.log(num);
//     num++
// }

//           Program 2

// let num = 1;
// while(num < 5){        // (1 < 5, print 1)
//     console.log(num);
// }

//            Program 3

// let num = 2;
// while(num < 7){        // (2 < 7),   (4 < 7), (6 < 7)
//     num +=2;           // (num = num + 2; 2 +2 = 4),   (num = 4 + 2 = 6) , (num = 6 + 2 = 8)
//     console.log(num);
// }

//             Program 4

// let num = 10;
// console.log(num);   //print 10
// while(num < 10){    // 10 < 10  false condition
//     console.log(num);
//     num++
// }

//             Progaram 5

// let num = 20;
// while(num > 10){       // (20 > 10, true),   (15 > 10, true), (10 > 10, false)
//     console.log(num);  // (print 20),  (print 15)
//     num -= 5;          // (num = 20 - 5, num =15), (num = 15 - 5, num = 10)   
// }



////////////////////////////////////////////////////////////
//                Do While Loop
///////////////////////////////////////////////////////////
//                   Program 1

// let num = 1;
// do
// {
//     console.log(num);     // print 1,2,3
//     num++;                // (num = 1 + 1,num = 2), (num = 2+1, num = 3), (num = 3+1, num = 4)  
// }while(num < 4);          // (2 < 4 true), (3 < 4 true), (4 < 4 false)

//                      program 2

// let num = 1;
// console.log("0 ");    // print 0
// do
// {
//     console.log(num);  // print 1
//     num--;             //( num = 1 - 1 ,num = 0)
// }while(num > 1);        // 0 > 1 false

//                       Program 3

// let num = 1;         // num = 2; num = 3; num = 4;
// do
// {
//     console.log(num);   // print 1,2,3,4 so on
//     num++;              // (num = 1+1, num = 2;), (num = 2+1, num = 3),(num = 3+1, num = 4).. so on
// }while(num > 1);        //  (2 > 1 true), (3 > 1 true),(4 > 1 true)  so on

//                      Program 4

// let num = 0;  //num = 2, num = 4
// do
// {
//     num += 2;      // (num = 0 + 2,num = 2),(num = 2 + 2, num = 4), (num = 4 + 2, num = 6)
//     console.log(num); // print 2,4,6;
// }while(num <= 5);     // (2 <= 5 true),(4 <= 5 true), (6 <= 5 false)


//                     Program 5
// console.log("1");
// do
// {
//     console.log("2");
// }while(false);


/////////////////////////////////////////////////////////////////////////
//                  For Loop
/////////////////////////////////////////////////////////////////////////  
// Program 1
// for(let i = 1; i < 5; i++)   //   i = 1,2,3,4,5; (1<5 true),(2<5 true),(3<5 true),(4<5 true),(5<5 true),
// {
//     console.log(i);           //print 1,2,3,4
// }
            // Program 2

// for(let i = 2; i <= 8; i+=2){ // i = 2,4,6,8,10;  (2<=8 True),(4<=8 True),(6<=8 True),(8<=8 True),(10<=8 False)    (i = 2+2,=4 ),(i = 4+2,=6 ),(i = 6+2,=8),(i = 8+2,= 10)
//     console.log(i);           // print 2,4,6,8
// }            

// 
//                              Program 3
// for(let i = 1; ;i++ ){
//     console.log(i);  // infinite loop
// }
//                       Program 4

// for(let i =11; i >= 5; i -=3){      // i=11,8,5,2;  (11>=5 true),(8 >=5 true),(5 >=5 true),(2 >=5 False);     (i = 11 -3,8),(i = 8 -3,5),(i = 5 -3,2)
//     console.log(i);             //Print 11,8,5
// }


                           //Program 5
// console.log("0");     //print 0
// for(let i =1; i < 1; i++){  //i=1;    (1<1 false); i= 1+1 = 2 
//    console.log(i); 
// }                           

////////////////////////////////////////////////////////////////
//                    Break And Continue
/////////////////////////////////////////////////////////////////
//                   Program 1

// for(let i =1; i<10; i +=3){    //i = 1,4;    (1<10true),(4<10true)   (i = 1+3,4)   
//     console.log(i);            //print 1,4

//     if(i === 4)
//     {
//         break;
//     }
// }

//                       Program 2
// let num = 10;
// while(num < 20){     //num = 10,14;      (10 < 20 true),(14 < 20 true)   
//     console.log(num);  // Print 10,14
//     num +=4;           // (num = 10 + 4, 14),(num = 14 + 4, 18),

//     if(num == 18){      // (14 == 18 false),(18 == 18 True),program terminate here 
//         break;
//     }
// }

//                    Program 3

// for(let i = 0; i<6; i+=2){      //i=0,2,4,6;  (0<6 true),(2<6 true),(4<6 true),(6<6 false)   (i = 0+2,2),(i = 2+2,4),(i = 4+2,6)
//     if(i === 2){      // 0 === 2 false,2 === 2 true,4 === 2 false,
//         continue;
//     }
//     console.log(i);     //print 0,4
// }

//                   Program 4

// let number = 0;     // number = 0,3,6,9
// while(number < 7){  // (0<7 true),(3<7 true),(6<7 true),(9<7 false)
//     number += 3;    //  (number = 0 +3, 3), (number = 3 + 3, 6),(number = 6 + 3, 9)

//     if(number == 6){  // (3 == 6 false), (6 == 6 true),(9 == 6 false);
//         continue;
//     }

//     console.log(number);  //Priint 3,9
// }

//                     Program 5

// for(let i =1; i <=3; i++){  //i=1,2,3,4  (1<=3 true),(2<=3 true),(3<=3 true),(4<=3 false)    (i = 1+1, 2),(i = 2+1, 3),(i = 3+1, 4)
//     if(i === 2){             // 1 === 2 false, 2 === 2 true, 3 === 2 false
//         continue;
//         break;
        
//     }
//     console.log(i);  // print 1,3
// }

///////////////////////////////////////////////////////////////////
//               Nested If
///////////////////////////////////////////////////////////////////
//              Program 1

// if(true){
//     console.log("1");

//     if(true){
//         console.log("2");
//     }
// }else
// {

//     console.log("3");
// }


//        Program 2

// let number = 10;
// if(number >= 10){
//     console.log("1");

//     if(number<10){
//         console.log("2");
//     }
// }else{
//     console.log("3");
// }

//              Program 3

// let number = 5;    //number =5,
// if(number == 5){     // 5 == 5 true 
//     number++;        // (number = 5+1, 6) 
//     console.log("1");    //print 1

//     if(number === 6){    //  (6 === 6 true)
//         console.log("2");  //print 2
//     }
// }else{
//     console.log("3");
// }


///             Program 4

// let number = 5;
// if(number === 5){       // 5 === 5 true
//     console.log("1");   // print 1

//     if(number > 0){     // 5 > 0 true 
//         console.log("2");  // print 2
    
//     if(number > 3){       // 5 > 3 true
//         console.log("3");   //print 3
//     }    
//     }
// }


///                Program 5

// let number = 10;
// if(number === 5){    // 10 === 5 false
//     console.log("1");
// }else{
//     console.log("2");    //print 2
//     if(number === 10){   // 10 === 10 true
//         console.log("3");  //print 3
//     }
// }


///////////////////////////////////////////////////////////////////////
//                  Nested Loop
//////////////////////////////////////////////////////////////////////
//                Program 1

// for(let i = 0; i < 1; i++){       //(i = 0,1)     (0<1 true),(1<1 false)   (i = 0+1,1)
//     console.log(i);      // print 0

//     for(let j = 0; j < 1; j++){   //j = 0,1;     (0<1 true),(1<1 false)      (j= 0+1,1)
//         console.log(j);      //print 0
//     }
// }


///                 Program 2

// for(let i =0; i < 2; i++){    // j=0,1,2;      (0 < 2 true),(1 < 2 true),(2 < 2 false);   (i = 0+1,1),(i = 1+1,2)
//     console.log(i);           //Print 0,1

//     for(let j =0; j <0; j ++){      //j = 0;      (0<0 false)    
//         console.log(j);
//     }
// }


//                  Program 3

// for(let i = 0; i <3; i++){    //i=0,1,2,3;    (0<3 true),(1<3 true),(2<3 true),(3<3 false)     (i=0+1,1), (i = 1+1,2),(i=2+1,3),
//     console.log(i);     //print 0,1,2

//     for(let j = 0; j < 1; j++){  // {j=0,1;    (0<1 true),(1<1 false);   (j = 0+1,1)}
//                                  // {j=0,1;    (0<1 true),(1<1 false)    (j = 0+1,1)}
//                                  // {j=0,1;    (0<1 true),(1<1 false)    (j = 0+1,1)}
//         console.log(j);    //print 0 // Print 0    // print 0
//     }
// }///outPut 0 0 1 0 2 0
    

//                       Program 4

// for(let a = 0; a<2; a++){    //a=0,1,2;     (0<2 true),(1<2 true),(2<2 false)   (a = 0+1,1) (a = 1+1,2)
//     console.log(a);     //print 0 1

//     for(let b = 0; b < 1; b++){  //  { b=0,1; (0<1 true),(1<1 false);   b=0+1,1}
//                                  //   {b=0,1; (0<1 true),(1<1 true) b=0+1,1}
//         console.log(b);      //print 0 //0

//         for(let c = 0; c <1; c++){//  { c=0,1;  (0<1true),(1<1false)    c=0+1,1 }
//                                 //    { c=0,1;  (0<1true),(1<1true)      c=0+1,1}
//             console.log(c);     //print 0 // 0
//         }
//     }
// }//OuTput 0 0 0 1 0 0



//                    Program 5

// let i = 1;         
// while(i <= 3){    // 1<=3 true
//     let j = 0;     //j=0,1,2

//     while(j<2)     // {0 <2 true  , (1 < 2 true) (2 < 2 false);}
//     {
//         console.log(j); // print 0 ,1
//         j++;       //(j = 0+1,1),(j = 1+1,2)
//     }
// }//output 0 1 infinite

///////////////////////////////////////////////////////////////////
//            Tricky 
//////////////////////////////////////////////////////////////////
//             Program 1
// let a = 1;
// let b = 1;

// a++;    // a = a+1   1+1 =2
// ++b;    // b = b+1    1+1 =2

// console.log(a + " " + b);

//         Program 2

// let a = 1;
// let b = 1;

// console.log(++a + " " + b++);    //OutPut 2 1


//          Program 3

// let a = 2;
// let b = 2;
// -- a;   // a - 1 = a;  2 - 1 = a;   1 = a; 
// b--;    // b = b - 1;  b = 2 - 1;   b = 1;
// console.log(--a + " "+ b--);   // 0 1

//           Program 4

// let i = 0;
// for(; i< 100; i++);

// console.log(i);

//           Program 5

// let i = 0;
// for(; i<=10; i+=2);
// console.log(i);

//////////////////////////////////////////////////////
//                  Strings
/////////////////////////////////////////////////////

//                  program 1
// let str = 'Hello';
// console.log(str[1]);
//                   program 2
// let str1 ="abc";
// let str2 = "defg";
// console.log(str1.length + str2.length)

//               program 3
// let color = "green";
// console.log(color[4]);
// console.log(color[5]);

//               program 4

// let word = "Arena";
// console.log(word.includes("na"));
// console.log(word.includes("A"));

//               program 5

// let equation = "160 + 135 = 295";
// for(let i =0; i < equation.length; i++){   //i=0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15   (0<15 true),(1<15true),(2<15true),(3<15true)(4<15true)(5<15true)(6<15true),(7<15true),(8<15true),(9<15true),(10<15 true),(11<15 true),(12<15 true)(13<15 true)(14<15 true),(15<15 False)   i=0+1,1 (i=1+1,2),(i=2+1,3),(i=3+1,4),(i=4+1,5),(i=5+1,6),(i=6+1,7),(i=7+1,8),(i=8+1,9),(i=9+1,10)(i=10+1,11)(i=11+1,12),(i=12+1,13)(i=13+1,14),(i=14+1,15)
//     let symbol = equation[i];    // symbol[0]=1, symbol[1]=6,symbol[2]=0,symbol[3]=" ", symbol[4]= +, symbol[5]= " ", symbol[6]= 1, symbol[7]= 3,symbol[8]= 5, symbol[9]= " ",symbol[10]= "=",symbol[11]= " ",symbol[12]= 2,symbol[13]= 9, symbol[15]= 5

//     if(!'12' .includes(symbol)){    //1,6,0," ", +, " ",1,3,5," ",=," ",2,9,5
//         console.log(symbol)        //Print 60 " " + " ",3,5," ",=," ",9,5
//     }
// }// OutPut Is: 60 + 35 = 95  


// Symbol in js
/// Symbol is a data type in js it represent unique value

// let id1 = Symbol("Hello");
// let id2 = Symbol("Hello");
// console.log(id1 == id2);
// console.log(id1);
// console.log(id1.description);
// console.log(typeof id2);

// let age = Symbol();

// let user = {
//     name: 'Yahoo Baba',
//     Class: 'Btech',
//     [age]: 25

// };
// // user[age] = 25;
// console.log(user);

//////////////////////////////////////////
            //Arrays
////////////////////////////////////////

///        Program 1
// let arr = [5,10,15];
// console.log(arr[1]);
// //           Program 2

// let colors = ['Blue','Green','Pink'];
// for(let i=0; i<2; i++){         // i=0,1,2       0<2true 1<2true  (2<2 false)     i=0+1,1  i=1+1,2
//     console.log(colors[i]);      //Priint Blue,Green
// }

//               Program 3

// let ages = [10,15,20,25,30];
// console.log(ages.length);

//              Program 4

// let numbers = [];
// console.log(numbers[0]);

//             Program 5

// let numbers = [1,2,3];
// console.log(numbers[3]);

/////////////////////////////////////////////////////
//(17)//                 Functions
/////////////////////////////////////////////////////
//                Program 1

// a();
// function a(){
//     console.log("1");
// }
// function b(){
//     console.log("2");
// }

//                   Program 2

let sum = getSum(2,4,3);

console.log(sum);

function getSum(a,b,c){
     return a+b+c;
     
}
getSum(2,3,4);

//                   Program 3

printArg();
function printArg(number){
    console.log(number);
}

//                     Program 4

// printName();
// printName("Joe");

// function printName(name ="Unknown"){
//     console.log(name);
// }


//                   Program 5

// console.log(getProd(3));

// function getProd(num1, num2 =2){
//     return num1 * num2;
// }


// function sum(a,b){
//     console.log( a + " and "+ b + " = "+ sum);
// }
// sum(30,40);


/// Largest number in array

// var arr = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for(var i = 0; i < arr.length; i++){   // i = 0;    0 < 8 true      (i = 0+1,1) 
//     if(largest < arr[i]){              // arr[0] < arr[]
//     largest = arr[i];
//     }
// }
// console.log(largest);


// var arr=[0,6,7,7,7];
//  var largest=[0];
//  //find the largest num;
//  for(var i=0;i<arr.length;i++){
//    var comp=(arr[i]-largest[0])>0;
//       if(comp){
// 	  largest =[];
// 	  largest.push(arr[i]);
// 	  }
//  }
//  console.log(largest)//7
 
//  //find the index of 'arr'
//  var arrIndex=[];
//  for(var i=0;i<arr.length;i++){
//     var comp=arr[i]-largest[0]==0;
// 	if(comp){
// 	arrIndex.push(i);
// 	}
//  }
// console.log(arrIndex);//[2,3,4]
