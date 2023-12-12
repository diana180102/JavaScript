function findLongestWordLength(str) {
    
     let palabras = str.split(' ');
     let max = 0;

     for (let i = 0; i < palabras.length; i++) {
      
    

       if(Math.max(palabras[i].length) > max){
            max = Math.max(palabras[i].length);
       }
    } 
        console.log(max);
  
    
    return max;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");