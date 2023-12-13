function findElement(arr, func) {
   let num = [];
  for (let i = 0; i < arr.length; i++) {
      
      if(func(arr[i])){
        num = arr[i];
        console.log(num);
        return num;
      }
    
  }

  return undefined;
}

// findElement([1, 2, 3, 4], num => num % 2 === 0);
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; });

