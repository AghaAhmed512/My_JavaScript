function isSequence(arr1, arr2) {
    // Combine the two arrays and sort them in ascending order
    const combinedArr = arr1.concat(arr2).sort((a, b) => a - b);
    
    // Check if each element is equal to the previous element plus one
    for (let i = 1; i < combinedArr.length; i++) {
      if (combinedArr[i] !== combinedArr[i-1] + 1) {
        return false;
      }
    }
    
    // If we made it through the loop without returning false, the arrays form a sequence
    return true;
  }

  console.log(isSequence([7, 4, 5, 1], [2, 3, 6])); // true
  console.log(isSequence([1, 4, 6, 5], [2, 7, 8, 9])); // false
  console.log(isSequence([1, 4, 5, 6], [2, 3, 7, 8, 10])); // false
  console.log(isSequence([44, 46], [45])); // true
    