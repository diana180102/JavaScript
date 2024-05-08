function sumFibs(num) {
  
   
   let valorPreview = 0;
   let valorA = 1;
   let result = 0;
   
   
   while (valorA<=num) {
      
      if (valorA % 2 !== 0) {
         
         result+= valorA;
      }
        
        valorA = valorA + valorPreview;
        valorPreview = valorA - valorPreview; 
      
      
  
   }


   
 
   return result;
   
   


}

sumFibs(30);



