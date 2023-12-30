function sumPrimes(num) {
  
   let primo = 0;
   
   for (let i = 2; i <=num; i++) {
      
      if(isPrime(i)){
         primo+= i;
         console.log(primo);
      }
      
   }
  
  
  return primo;
}


function isPrime(num){
   for (let i = 2; i<num; i++) {
      if(num % i === 0){
         
          return false;
        //console.log(result);
      }
   }

   return true;   
}

sumPrimes(977);