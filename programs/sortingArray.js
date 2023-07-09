function sortArray(array){
    for(let i = 0; i<array.length; i++){
        for(let j = i + 1; j < array.length; j++ ){
            if(array[j] < array[i]){
                let temp = array[i];
                array[i] = array [j];
                array[j] = temp;
            }
        }
    }
    return array
}

console.log(sortArray([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
// const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// console.log(sortArray(myArray));