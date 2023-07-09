//     Buit in types
let sales:number = 123456789;                  // number type
let course:string = 'TypeScript';             // string type
let is_Published:boolean = true;             // boolean type
let level:any;                              // any type
let num:number[] = [1,2,3,4,5,6,7,8,9];    // array
let user:[string,number] = ['agha',26];   // tuple

// Enum (set of related constants)
enum Size {                               
    Small = 'S',
    Medium ='M',
    Large = 'L',
    ExtraLarge = 'XL',
}                                         

let mySize:Size = Size.Large;
console.log(`Size is ${mySize}`);  

// Function

function calculateTex(income:number, taxYear:number ):number {
    if(taxYear < 2023){
        return income * 1.2;
    }else{
        return income * 1.3;
    }
}

console.log(calculateTex (10_000,2023));

// Object
let Employee:{
    id: number,
    name:string,
    retire:(date:Date)=> void;
} = {
    id:1,
    name:'ahmed',
    retire:(date:Date)=>{
        console.log(date);

    }
}
// type alias

type Employee = {
    id: number,
    name:string,
    retire:(date:Date)=> void;
} 

let employee:Employee = {
    id:1,
    name:'ahmed',
    retire:(date:Date)=>{
        console.log(date);

    }
}

/// union types = assign variable more then one type , combining type
// Narrowing
function KgToLbs(weight:number | string):number {
    if(typeof weight === 'number'){
        return weight * 2.2;
    }else{
        return parseInt(weight) * 2.2;
    }

}
KgToLbs(10);
KgToLbs('10Kg');

/// intersection
type Draggable = {
    drag:()=>void;
}
type Resizeable = {
    resize:()=>void;
}
type UIWidget = Draggable & Resizeable;

let textBox:UIWidget = {
drag:() => {},
resize: ()=> {},

}