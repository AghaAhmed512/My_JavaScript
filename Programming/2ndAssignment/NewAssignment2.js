function check(arr1, arr2){   // define a function name "check" takes two arrays, arr1 and arr2, as arguments.
   
const combined = [];   //declare new array name "combined" and initializes it an empty array.

for(let i = 0; i<  arr1.length; i++){ //iterates through all the elements in arr1 
        combined.push(arr1[i]);       //and adds them to the "combined" array using the "push" method.
}

for(let i = 0; i<  arr2.length; i++){  //iterates through all the elements in arr2 
        combined.push(arr2[i]);        //and adds them to "combined" array using the "push" method.
}
    //console.log(combined);

    // bubble sort algorithm
for (let i = 0; i < combined.length; i++) {
    for (let j = i + 1; j < combined.length; j++) {
    if (combined[j] < combined[i]) {
            let temp = combined[i];
            combined[i] = combined[j];
            combined[j] = temp;
    }
    }
    }
      //console.log(combined);
//iterates through the sorted "combined" array and checks if each element is exactly one less 
//than the next element.If any two adjacent elements are not consecutive, the function returns false.
for(let i = 0; i < combined.length - 1; i++){
    if(combined[i] + 1 !== combined[i + 1]){
        return false;
    }
}


return true;
}
console.log(check([0,1,9,4,2],[8,3,6]));
//0 1 2 3 4 _ 6 _ 8 _ 9 = false

console.log(check([0,1,2],[3,4]));
//0 1 2 3 4 = true