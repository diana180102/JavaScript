function mutation(arr) {
    
    let word = arr[0].toLowerCase(); // target
    let target = arr[1].toLowerCase(); // test
    
     //Verificamos que las letras del "segundo parametro" 
     //se encuentren en el primer parametro
      for (let i = 0; i < target.length; i++) {
         if(word.indexOf(target[i]) < 0){
            return false;
         }
        
      }
      
      return true;
   
     
     
}

// mutation(["hello", "hey"]);
// mutation(["hello", "Hello"]);
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);