function chunkArrayInGroups(arr, size) {
   
   let a = []
     
     for (let i = 0; i < arr.length; i++) {
        
        a[i] = arr[i].slice(0, size).split(2);
        
     }
        console.log(a);

  
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);