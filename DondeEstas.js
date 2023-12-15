function whatIsInAName(collection, source) {
   
    // Cambia solo el código debajo de esta línea

      const keys = Object.keys(source);
       
       collection.filter(item => keys
         .every(key => item.hasOwnProperty(key) 
            && item[key] === source[key]));
        
      
     //console.log(arr);
    // Cambia solo el código encima de esta línea
    
  }
  
  whatIsInAName(
   [
   { first: "Romeo", last: "Montague" }, 
   { first: "Mercutio", last: null }, 
   { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });