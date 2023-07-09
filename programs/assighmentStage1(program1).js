// // program to find the largest number of array and print his index number 
// let arr=[3,8,5,99,6,24,98,66];       // length 8
// let largest= arr[0];
//  //find the largest num;
//  for(let i=0;i<arr.length;i++){        // {i = 0  0 < 8  i = 0+1,1}, { i=1   1 < 8    i = 1+1,  2}, {i=2, 2<8 true,   i=3} {i=3, 3<8 true,   i=4}   {i=4, 4<8 true,   i=5} {i=5, 5<8 true,   i=6}          {i=6, 6<8 true,   i=7}       {i=7, 7<8 true,   i=8}      
// 	                                  //  
//    let comp=(arr[i]-largest[0])>0;    //(arr[0] - largest[0]) > 0     (arr[1] - largest[0]) > 0     arr[2] -largest[0] > 0    arr[3] - largest [0] > 0      arr[4]  - largest[0] >0    arr[5] -largest[0] > 0   arr[6] -largest[0] >0   arr[7] - largest[0] > 0
//       if(comp){                       //(3  - 3 > 0) false            ( 8 - 3= 5 )  > 0  true       (5 - 3 = 2) > 0 true          99  - 3   > 0 true             6   - 3 > 0 true           24 -3 > 0 true          98 - 3 >0 true         66 - 3 >0 true      
// 	  largest =[];//                      // largest 98
	                                      
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


////////////////////////////////////////////////updated Code
let arr=[3,8,5,99,6,24,98,66,200];      
let largest=arr[0];
 //find the largest num;
 for(let i=0;i<arr.length;i++){                     
	                                    
   if(arr[i] > largest)    //8>3    5>3
      {                                                 
	  largest = arr[i];       //8 ,5,99             
	                                      
	  }
 }
 console.log("Biggest number in array is "+largest);
 console.log("Index of the biggest number is "+ arr.indexOf(largest));
 
 

