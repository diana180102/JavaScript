function repeatStringNumTimes(str, num) {
    
    let result = [] ;
     
    
    for (let i = 0; i < num; i++) {
        
        result.push(str);
        
     }

     let cadena = result.join('').trim();
    console.log(result);
    console.log(cadena);
    
    return cadena;
  }
  
  repeatStringNumTimes("abc", 3);