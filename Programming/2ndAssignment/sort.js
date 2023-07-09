function sortArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[i]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr;
  }
  
  // Example usage:
  const myArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  console.log(sortArray(myArray)); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
  