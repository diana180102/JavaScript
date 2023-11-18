function quickCheck(arr, elem) {
    // Cambia solo el código debajo de esta línea
        
   for (let i = 0; i < arr.length; i++) {
    
        if(arr.indexOf(elem) === -1){
            return false;
        }
         
            return true;
    }
    
    // Cambia solo el código encima de esta línea
  }
  
  console.log(quickCheck([3, 5, 9, 125, 45, 2], 125));