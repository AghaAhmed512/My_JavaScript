document.write("<b>In JS document.write() method Are use to print statement</b><br>");


//Comments in JS 1) Single Line Comment 2) Multi Line comments
 document.write("There are 2 type of comments in JS<br> <ol><li>Single Line Comment <ul><li>Single line comment are use to add notes in code that are not visible in web</li><li>Only Apply on one line</li><li>It is represented by forward slashes // </li></ul></li><li>Multi Line Comment <ul><li>code wrrite in multiline comment are ignored by js</li><li>It use to comment more then one line</li></li>Represented by /*    */ </li></ul></li><ol> <br><br>");
 
 //                         Variables in jS
 document.write("<b>Variable in JS</b>:")
 document.write("A JavaScript variable is simply a name of storage location<br> to use variable First we can declare it and assign the value to it")
 document.write("3 Types of variable is JS <ol><li>Var</li><li>Let</li><li>Const</li></ol> ")
 document.write("Right Ways to write a variable Name<ul> <li>firstname</li> <li>first_name</li>  <li>first-name</li> <li>firstName</li> <li>firstname99</li> </ul>")



document.write("<hr>");
 //                            Data Types
 document.write("Data Types in JS <br>");
 document.write("<ol><li>String</li> <li>Number</li> <li>Bool</li> <li>Array</li> <li>Object</li> <li>Null</li> <li>Undefined</li> </ol>")
 var number1 = 34;
 var number2 = 33.5;
 var str = "agha"
 var bol = true;
 var arr = ["HTML","CSS","JS"];
 var ob = {first:"agha",
          last:"ahmed"};
 var nl = null;
 var un; 


document.write("<br>Type of ",number1 + " is ");
document.write(typeof(number1),"<br>");

document.write("<br>Type of ",number2 + " is ");
document.write(typeof(number2),"<br>");

document.write("<br> Type of ", str + " is ");
document.write(typeof(str),"<br>");

document.write("<br> Type of ", bol + " is ");
document.write(typeof(bol),"<br>");

document.write("<br> Type of ", arr + " is ");
document.write(typeof(arr),"<br>");

document.write("<br> Type of ", nl + " is ");
document.write(typeof(nl),"<br>");

document.write("<br> Type of ", un + " is ");
document.write(typeof(un),"<br>");

document.write("<br> Type of ", ob + " is ");
document.write(typeof(ob),"<br><br> <hr>");

document.write("<hr>");

//                            Arithmatic operators

document.write("There are different types of Arithmatic Operators:");
document.write("<ol> <li>Addition +</li> <li>Subtraction -</li> <li>Multiplecations *</li> <li>Exponention **</li> <li>Division /</li> <li>Modulus(remainder)) % </li> <li>Decrement  --</li> <li>increment ++</li> </ol>")

var a1 = 6;
var a2 = 8;

var s1 = 16;
var s2 = 10; 

var m1 = 5;
var m2 = 3;

var d1 = 14;
var d2 = 2;

var md1 = 15;
var md2 = 2;

var ex1 = 2;
var ex2 = 3;

var sum = a1 + a2;
var sub = s1 - s2;
var mul = m1 * m2;
var div = d1 / d2;
var mud = md1 % md2;
var exp = ex1 ** ex2;

document.write("The Sum of "+a1+" and "+a2+" is " +sum,"<br>");
document.write("The Subtraction of "+s1+" and "+s2+" is " +sub,"<br>");
document.write("The Multiplecation of "+m1+" and "+m2+" is " +mul,"<br>");
document.write("The Division of "+d1+" and "+d2+" is " +div,"<br>");
document.write("The Modulus of "+md1+" and "+md2+" is " +mud,"<br>");
document.write("The Exponention of "+ex1+" and "+ex2+" is " +exp,"<br>");




document.write("<hr><hr>");