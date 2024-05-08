function addTogether(...arg) {

/* SI solo se proporciona un argumento y es un número
   ENTONCES devuelve una función que recibe el segundo argumento */
if(arg.length === 1 && typeof arg[0] === 'number'){
       return function(arg2){

        /* SI, el segundo argumento es un número 
           ENTONCES se realiza la suma 
           o por el contrario sera UNDEFINED */
        if(typeof arg2 === 'number'){
          return arg[0] + arg2;
        }else{
          return undefined;
        }
       };
       /* SI, se recibe 2 argumentos AND y cada uno es un número
          ENTONCES se realiza la suma de los dos números 
          o por el contrario será UNDEFINED */
     }else if (arg.length === 2 && arg.every(arg => typeof arg === 'number')){
        return arg[0] + arg[1];
     }else{
      return undefined;
     }

     




   
    
  }
  
  // addTogether(2,3);
  // addTogether("2", 3);
  addTogether(5)(7) ;


