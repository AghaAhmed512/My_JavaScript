// object ilterals /example 1


//Old way to create object

// let names = 'ahmed';
// let course = 'JavaScript';
// let obj = {
//     names:names,
//     course:course,
// };
// console.log(obj);

//////////////////////////////////////////
// new way
// let names = 'ahmed';
// let course = 'JavaScript';
// let obj = {
//     names,
//     course,
// };
// console.log(obj);

// object ilterals /example 2

// let n = 'student';
// let obj = {
//     [n + "name"]: 'Ahmed',
//     training: 'Automation',
//     details: function(){
//         return `${this.studentname} is a trainee in ${this.training} `;
//     }
// };
// console.log(obj);
// console.log(obj.studentname);

///////////////////////////////////
// object ilterals /example 3

let newObj = {
    name: 'Agha Ahmed',
    'detail show'() {
       return  `${this.name}`;
    }
};
console.log(newObj['detail show']());
