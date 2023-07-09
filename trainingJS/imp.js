//                                Find max value of arry with its index
//////////////////////////////////////////////////////
                                ///////Program 1/////
//////////////////////////////////////////////////////

// var arr=[3,8,5,99,6,24,98,66];
// var largest=[0];
//  //find the largest num;
//  for(var i=0;i<arr.length;i++){
//    var comp=(arr[i]-largest[0])>0;
//       if(comp){
// 	  largest =[];
// 	  largest.push(arr[i]);
// 	  }
//  }
//  console.log(largest);
 
//  //find the index of 'arr'
//  var arrIndex=[];
//  for(var i=0;i<arr.length;i++){
//     var comp=arr[i]-largest[0]==0;
// 	if(comp){
// 	arrIndex.push(i);
// 	}
//  }
// console.log(arrIndex);


////////////////////////////////////////////////////////////

//                       Program 2
//////////////////////////////////////////////////////////

// let arr=[3,8,5,99,6,24,98,66];
// let largest=[0];
//  //find the largest num;
//  for(var i=0;i<arr.length;i++){
//    let comp=(arr[i]-largest[0])>0;
//       if(comp){
// 	  largest =[];
// 	  largest.push(arr[i]);
// 	  }
//  }
//  console.log("Biggest number in array is "+largest);
 
//  //find the index of 'arr'
//  let arrIndex=[];
//  for(let i=0;i<arr.length;i++){
//     let comp=arr[i]-largest[0]==0;
// 	if(comp){
// 	arrIndex.push(i);
// 	}
//  }
// console.log("Index of the biggest number is "+arrIndex);



/////////////// Find Maximum value of array
/////////////////////////////////////////////////////////////////////////
//                Program 3
/////////////////////////////////////////////////////////////////////

// function maximum(){
//     let array = [5,4,3,15,10,1];
//     let max = array[0];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > max){
//             max = array[i]
//         }

//     }
//     console.log("The largest number in array is "+ max);
// }maximum();

//// Find the biggest number in the array given. Print the biggest number and its index in the array.

///////////////////////////////////////////////////////
                   ///program 4
//////////////////////////////////////////////////

let arr = [3,8,5,99,6,24,98,66];                         ///Create an Array
console.log("Array is "+ arr);                          /// Printing Array
let max_val = Math.max(...arr);                        ///  Find max value
console.log("Max value is "+max_val);                 ///   Print max value  
let max_index = arr.indexOf(max_val);                ///    Find the index of highest value
console.log("Max value index is: " + max_index);    ///     Print the max value index
