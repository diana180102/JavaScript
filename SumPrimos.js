function sumPrimes(num) {
  
   
    let result = 0;
    

   for (let index = 2; index<num; index++) {
      if(isPrime(index)){
         
          result+= index;
        console.log(result);
      }
   }

   return result;

}

function isPrime(num){
   for (let index = 2; index<num; index++) {
      if(num % index === 0){
         
          return false;
        //console.log(result);
      }
   }

   return true;   
}

sumPrimes(10);