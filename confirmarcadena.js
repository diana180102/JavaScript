function confirmEnding(str, target) {
      
       

     let result = new RegExp(target + '$', "i");

     return result.test(str);
        

  }
  
  confirmEnding("Connor", "n");