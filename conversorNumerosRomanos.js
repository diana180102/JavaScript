function convertToRoman(num) {
    
    const numerosRomanos = {
        M:	1000,
        CM:	900,
        D:	500,
        CD:	400,
        C:	100,
        XC:	90,
        L:	50,
        XL:	40,
        X:	10,
        IX:	9,
        V:	5,
        IV:	4,
        I:	1
    }

    let romano = '';
      
    for (const r in numerosRomanos) {
      
        while (num >= numerosRomanos[r]) {
        
              num-= numerosRomanos[r];
              console.log(num);
              romano+= r;
              console.log(romano);
              
              
                
        }
    }
    
            
        
    

    
    
    
    return romano;
   }
   
   convertToRoman(36);