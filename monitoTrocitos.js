function chunkArrayInGroups(arr, size) {
   
   let trozo = [];
   let trozosArr = [];
     
     for (let i = 0; i < arr.length; i++) {
        
        trozo = arr.splice(0, size);
        trozosArr.push(trozo);
      }
   
   
   
   console.log(trozo);
   console.log(trozosArr);

  
  return arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);