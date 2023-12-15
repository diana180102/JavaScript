function getIndexToIns(arr, num) {
  let array = arr.sort((a, b) => a - b);

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= num) {
      console.log(i);
      return i;
    }
  }
    
    console.log(array.length);
//   return array.length;
}

// getIndexToIns([40, 60], 50);
getIndexToIns([5, 3, 20, 3], 5);
