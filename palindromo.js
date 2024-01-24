function palindrome(str) {
    
    let cadena = ' ';

    cadena = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    const desc = [];
    for (let i = cadena.length-1; i >= 0; i--) {
          
        desc.push(cadena[i]);
        
    }

     let cadenaDesc = desc.join('');

     if(cadenaDesc === cadena){
        return true;
     }
   
    
    

    return false;
  }
  
//   palindrome("eye");
  palindrome("A man, a plan, a canal. Panama");