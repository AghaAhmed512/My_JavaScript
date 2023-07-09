let array1 = [4,8,10,9,5];
let array2 = [5,10,8,9,4];

const is_same = array1.length == array2.length && array1.every(
    (currentElement) =>{
        if(array2.indexOf(currentElement) > -1){
            return(currentElement = array2[array2.indexOf(currentElement)]);
        }
    }
);

console.log(is_same);