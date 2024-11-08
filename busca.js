function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      const middle = Math.floor((left + right) / 2);
      if (arr[middle] === target) return middle;
      else if (arr[middle] < target) left = middle + 1;
      else right = middle - 1;
    }
  
    return -1;
  }
  
  console.log(binarySearch([1, 3, 5, 7, 9], 5)); 
  