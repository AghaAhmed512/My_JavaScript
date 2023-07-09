//Write a function that asks for two arrays as arguments and returns True if those arrays after
//combining form a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is, but 1, 2, 4, 5 is not.

function checkSequence(firstArray,secondArray){ //Define function name 'checkSequence' that takes two arrays 'firstArray','secondArray' as arguments

    const combinedArray = [];  //Declares empty array name 'combinedArray'
    
    for(let i = 0; i<firstArray.length; i++){  //Iterates through the elements of firstArray using a for loop, 
        combinedArray.push(firstArray[i]);   //adds each element to the 'combinedArray' array using the push method.    
    }

    for(let i = 0; i<secondArray.length; i++){  //Iterates through the elements of 'secondArray' using a for loop, 
        combinedArray.push(secondArray[i]);    //adds each element to 'combinedArray' array using the push method.
    }//console.log(combinedArray);
    
    for (let i = 0; i < combinedArray.length; i++) {

        for (let j = i + 1; j < combinedArray.length; j++) {

        if (combinedArray[j] < combinedArray[i]) { //check value at index[j] is less with value at index[i]
                //Swaping here// 4<7
                let temp = combinedArray[i];            //temp=7
                combinedArray[i] = combinedArray[j];    //combinedArray[i] = 4
                combinedArray[j] = temp;                //combinedArray[j] = 7
            }
        }
    }//console.log(combinedArray);

    for(let i = 0; i < combinedArray.length - 1; i++){
        if(combinedArray[i] + 1 !== combinedArray[i + 1]){ //This checks if the current element of the combinedArray (combinedArray[i]) plus 1 is not equal to the next element of the combinedArray
           // 1+1  !== 2
            return false;  //If any two adjacent elements are not consecutive, the function returns false.
        }
    }
    
  return true; // elements in combinedArray are consecutive,function returns true.  
}
console.log(checkSequence([10,9,8,7,6,5,4,3,2,1], [-1,0,-2]));

// console.log(checkSequence([1, 4, 6, 5], [2, 7, 8, 9]));

// console.log(checkSequence([1, 4, 5, 6], [2, 3, 7, 8, 10]));

// console.log(checkSequence([44, 46], [45]));

